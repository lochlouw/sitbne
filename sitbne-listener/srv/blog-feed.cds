
using {lochlouw.sitbne as db} from '../db/schema';
// using {BlogService } from '../../sitbne-service';

service BlogFeed {
    entity Events as projection on db.Events;

    // event Posted: BlogService.Posts;
}