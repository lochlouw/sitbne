const cds = require("@sap/cds");
module.exports = cds.server;



if (process.env.NODE_ENV !== "production") {

    const{ setTestDestination } = require('@sap-cloud-sdk/test-util');

    setTestDestination({
      authentication: 'NoAuthentication',
      name: 'soap-server',
      isTrustingAllCertificates: false,
      url: 'http://127.0.0.1:8001',
      path: '/SayHello'
    });

} else {
  // const cds_swagger = require ('cds-swagger-ui-express')
  // cds.on ('bootstrap', app => app.use (cds_swagger()) )
}

// cds.on ('bootstrap', app => app.use("/", express.static("./srv/app")) )



