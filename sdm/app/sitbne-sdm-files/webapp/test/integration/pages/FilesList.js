sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'lochlouw.sitbne.sitbnesdmfiles',
            componentId: 'FilesList',
            contextPath: '/Files'
        },
        CustomPageDefinitions
    );
});