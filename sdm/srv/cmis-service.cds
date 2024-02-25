namespace lochlouw.sitbne.cmis;

service CMISService {
    // @odata.draft.enabled: true
    @cds.persistence.skip
    @Sdm.Entity
    entity Files {
        key id           : String       @Sdm.Field     : {
                type: 'property',
                path: 'cmis:objectId'
            };
            name         : String       @Sdm.Field     : {
                type: 'property',
                path: 'cmis:name'
            };
            url          : String       @Sdm.Field     : {type: 'link'};
            content      : LargeBinary  @Core.MediaType: contentType  @Core.ContentDisposition.Filename: name;
            contentType  : String       @Core.IsMediaType
                                        @Sdm.Field     : {
                type: 'property',
                path: 'cmis:contentStreamMimeType'
            };
            createdBy    : String       @Sdm.Field     : {
                type: 'property',
                path: 'cmis:createdBy'
            };
            creationDate : Date         @Sdm.Field     : {
                type: 'property',
                path: 'cmis:creationDate'
            };
    };

}
