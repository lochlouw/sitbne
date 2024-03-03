const cds = require("@sap/cds");

class BlogFeed extends cds.ApplicationService {
  async init() {
    const messaging = await cds.connect.to("messaging");
    // const BlogService = await cds.connect.to("BlogService");
    const { Events } = this.entities("lochlouw.sitbne");

    // BlogService.on("Post.Created.v1", (msg) => {
    //   console.log(msg);
    //   // return msg;
    // });
    messaging.on(
      [
        "BlogService.Post.Posted.v1",
        "BlogService.Post.Modified.v1",
        "BlogService.Post.Deleted.v1",
      ],
      async (msg) => {
        console.log("msg", msg);

        await INSERT.into(Events,[
          {
            event: msg.event,
            text: JSON.stringify(msg)
          }
        ]);

      }
    );
    messaging.on(
      [
        "BlogService.Comment.Created.v1",
        "BlogService.Comment.Modified.v1",
        "BlogService.Comment.Deleted.v1",
        "BlogService.Comment.Liked.v1",
        "BlogService.Comment.Unliked.v1"
      ],
      async (msg) => {
        console.log("msg", msg);

        await INSERT.into(Events,[
          {
            event: msg.event,
            text: JSON.stringify(msg)
          }
        ]);
      }
    );

    super.init();
  }
}

module.exports = BlogFeed;

// module.exports =  async()=>{
//     // const BlogService = await cds.connect.to("BlogService");
//     const messaging = await cds.connect.to("messaging");

//     // BlogService.on('Post.Posted.v1', (msg) => {
//     //     console.log(msg);
//     //     // return msg;
//     // });

//     messaging.on('BlogService.Post.Posted.v1', async msg => {  console.log('msg',msg); })
// }
