using {
    cuid,
    managed,
    User
} from '@sap/cds/common';


namespace lochlouw.dropbear.sitbne;

using { lochlouw.dropbear.sitbne.types as types } from './types';

entity Posts : cuid, managed {
    subject  : String(125);
    title    : String(125);
    text     : String(1024);
    rating   : types.Rating;
    
    comments : Composition of many Comments
                   on comments.post = $self;
}

entity Comments : cuid, managed {
    text    : String(1024);
    rating   : types.Rating;

    parent  : Association to one Comments;
    replies : Association to many Comments
                  on replies.parent = $self;
    post    : Association to one Posts;
    likes   : Composition of many Likes
                  on likes.comment = $self;
}

entity Likes {
    key comment : Association to Comments;
    key user    : User;
        likedAt : Timestamp @cds.on.insert : $now;
}
