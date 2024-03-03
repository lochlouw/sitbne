using { lochlouw.dropbear.sitbne as db } from '../db/schema';

service BlogService {

    // entity MyPosts as projection on db.Posts {
    //     *,
    //     count(comments.ID) as totalComments: Integer
    // } where createdBy = $user;

    // function MyPosts() returns array of Posts;
    entity MyPosts as projection on db.Posts[createdBy=$user];

    @cds.redirection.target
    entity Posts as projection on db.Posts;

    entity Comments as projection on db.Comments
    excluding { likes }
    actions {
        action like();
        action unlike();
    };
    // entity Likes as projection on db.Likes;

    // Posts
    event Post.Posted.v1: Posts;
    event Post.Modified.v1: Posts;
    event Post.Deleted.v1: Posts;
    // Comments
    event Comment.Created.v1: Comments;
    event Comment.Modified.v1: Comments;
    event Comment.Deleted.v1: Comments;
    // Likes
    event Comment.Liked.v1:  {
        commentId: Comments:ID;
        user: db.Likes:user;
        likedAt: Timestamp;
    };
    event Comment.Unliked.v1: {
        commentId: Comments:ID;
        user: db.Likes:user;
        unlikedAt: Timestamp;
    };

}

@graphql
Service QLBlogService @(path : '/graphql/blog') {

    entity MyPosts as projection on db.Posts[createdBy=$user];

    @cds.redirection.target
    entity Posts as projection on db.Posts;

    entity Comments as projection on db.Comments 
    excluding { likes }
    actions {
        action like();
        action unlike();
    };
}