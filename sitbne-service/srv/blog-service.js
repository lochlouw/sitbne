const cds = require("@sap/cds");
const LOG = cds.log("Blogs");

class BlogService extends cds.ApplicationService {
  async init() {
    const { Comments, Likes } = this.entities("lochlouw.dropbear.sitbne");
    const { Posts } = this.entities;
    const messaging = await cds.connect.to("messaging");

    // messaging.on('Posted', msg => console.log(msg));

    this.after(["CREATE", "UPDATE", "DELETE"], "Posts", async (_, req) => {
      const { event } = req;
      const EVENTS = {
        CREATE: "Post.Posted.v1",
        UPDATE: "Post.Modified.v1",
        DELETE: "Post.Deleted.v1",
      };

      // send to a topic
      await this.emit(EVENTS[event], req.data);
    });

    this.after(["CREATE", "UPDATE", "DELETE"], "Comments", async (_, req) => {
      const { event } = req;
      const EVENTS = {
        CREATE: "Comment.Created.v1",
        UPDATE: "Comment.Modified.v1",
        DELETE: "Comment.Deleted.v1",
      };

      // send to a topic
      await this.emit(EVENTS[event], req.data);
    });

    this.on("MyPosts", async (req) => {
      const tx = cds.tx(req),
        { user } = req;

      return tx.run(SELECT.from(Posts).where({ createdBy: user.id }));
    });

    // Increment counter for reviews considered helpful
    this.on("like", "Comments", async (req) => {
      if (!req.user)
        return req.reject(400, "You must be identified to like a comment");
      const { comment } = req.data,
        { user } = req;
      const tx = cds.tx(req);

      const affectedRows = tx
        .run([
          INSERT.into(Likes).entries({ comment_ID: review, user: user.id }),
          // UPDATE (Comments) .set({liked: {'+=': 1}}) .where({ID:review})
        ])
        .catch(() => req.reject(400, "You already liked that review"));
        await this.emit("Comment.Liked.v1", {
            comment_ID: review,
            user,
            unlikedAt: new Date().toISOString(),
        });

        return affectedRows;

    });

    // Delete a former like by the same user
    this.on("unlike", "Comments", async (req) => {
      if (!req.user)
        return req.reject(
          400,
          "You must be identified to remove a former like of yours"
        );
      const { review } = req.data,
        { user } = req;
      const tx = cds.tx(req);
      const affectedRows = await tx.run(
        DELETE.from(Likes).where({ comment_ID: review, user: user.id })
      );
      if (affectedRows === 1)
        await this.emit("Comment.Unliked.v1", {
          comment_ID: review,
          user,
          unlikedAt: new Date().toISOString(),
        });
      return affectedRows;
      // if (affectedRows === 1)  return tx.run (UPDATE (Comments) .set ({liked: {'-=': 1}}) .where ({ID:review}))
    });

    super.init();
  }
}

module.exports = BlogService;
