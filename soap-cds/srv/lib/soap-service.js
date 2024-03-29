const soap = require("soap");
const client = require("@sap-cloud-sdk/http-client");
const connectivity = require("@sap-cloud-sdk/connectivity");
// const cds = require('@sap/cds');

// Helper to create a soap service through the BTP destination service
async function getSoapService(service, wsdl, endpoint) {
  // Get the service reference
  var definition = cds.env.requires[service];
  var dest;
  console.log(definition);

  // Get the destination data from BTP
  if (process.env.NODE_ENV !== "production")
    dest = await connectivity.getDestination({
      destinationName: "soap-server",
    });
  else
    dest = await connectivity.getDestination({
      destinationName: definition.credentials.destination,
    });

  // Get service endpoint
  try {
    const url =
      dest.url.substr(dest.url.length - 1, 1) === "/"
        ? dest.url.substr(0, dest.url.length - 1)
        : dest.url;
    // endpoint.url = url + definition.credentials.path;
    if (definition.credentials.path) {
      endpoint.url = url + definition.credentials.path;
    } else {
      endpoint.url = url + dest.path;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }

  // Create an httpClient which connects over the BTP destination
  var httpClient = {
    request: async function (url, data, callback, exheaders, exoptions) {
      client
        .executeHttpRequest(
          dest,
          {
            method: "POST",
            url: url,
            data: data,
            headers: exheaders,
          },
          { ...exoptions, fetchCsrfToken: false }
        )
        .then((result) => {
          callback(null, result, result.data);
        })
        .catch((e) => {
          callback(e);
        });
    },
  };

  // Instantiate the service using that http client
  return soap.createClientAsync(wsdl, { httpClient: httpClient });
}

module.exports = {
  getSoapService,
};
