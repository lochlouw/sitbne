using lochlouw.sitbne.cmis.CMISService as service from '../../srv/cmis-service';

annotate service.Files with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'url',
            Value : url,
        },
        {
            $Type : 'UI.DataField',
            Label : 'content',
            Value : content,
        },
        {
            $Type : 'UI.DataField',
            Label : 'contentType',
            Value : contentType,
        },
    ]
);
annotate service.Files with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'url',
                Value : url,
            },
            {
                $Type : 'UI.DataField',
                Label : 'content',
                Value : content,
            },
            {
                $Type : 'UI.DataField',
                Label : 'contentType',
                Value : contentType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'createdBy',
                Value : createdBy,
            },
            {
                $Type : 'UI.DataField',
                Label : 'creationDate',
                Value : creationDate,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
