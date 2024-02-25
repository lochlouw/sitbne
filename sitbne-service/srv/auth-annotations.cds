using {BlogService} from './blog-service';

// annotate AdminService with @(requires: ['admin','system-user']);

annotate BlogService with @(requires: 'authenticated-user');

annotate BlogService.Posts with @(restrict: [
    { grant: [ 'READ' ], to: 'user' },
    { grant: [ 'CREATE', 'UPDATE', 'DELETE' ], to: ['user'], where: 'createdBy = $user' },
    { grant: '*', to: ['admin','system-user'] }
]);

annotate BlogService.Comments with @(restrict: [
    { grant: [ 'READ' ], to: 'user' },
    { grant: [ 'CREATE', 'UPDATE', 'DELETE' ], to: ['user'], where: 'createdBy = $user' },
    { grant: '*', to: ['admin','moderator','system-user'] }
]);
