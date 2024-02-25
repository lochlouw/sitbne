using { lochlouw.dropbear.sitbne as db } from '../db/schema';

service BlogService {

    // entity MyPosts as projection on db.Posts {
    //     *,
    //     count(comments.ID) as totalComments: Integer
    // } where createdBy = $user;

    function MyPosts() returns array of Posts;

    @cds.redirection.target
    entity Posts as projection on db.Posts {
        *,
        count(comments.ID) as totalComments: Integer
    };

    

    entity Comments as projection on db.Comments {
        *,
        count(likes.user) as liked: Integer
    }
    excluding { likes }
    actions {
        action like();
        action unlike();
    };
    // entity Likes as projection on db.Likes;


    event Post.Posted.v1: Posts;
    event Post.Modified.v1: Posts;
    event Post.Deleted.v1: Posts;

    event Comment.Created.v1: Comments;
    event Comment.Modified.v1: Comments;
    event Comment.Deleted.v1: Comments;

}