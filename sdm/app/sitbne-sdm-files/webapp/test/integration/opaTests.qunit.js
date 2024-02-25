sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lochlouw/sitbne/sitbnesdmfiles/test/integration/FirstJourney',
		'lochlouw/sitbne/sitbnesdmfiles/test/integration/pages/FilesList',
		'lochlouw/sitbne/sitbnesdmfiles/test/integration/pages/FilesObjectPage'
    ],
    function(JourneyRunner, opaJourney, FilesList, FilesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lochlouw/sitbne/sitbnesdmfiles') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFilesList: FilesList,
					onTheFilesObjectPage: FilesObjectPage
                }
            },
            opaJourney.run
        );
    }
);