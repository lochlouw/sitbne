const { getSoapService } = require('./soap-service');
// const xml2js = require('xml2js');

let sayHelloServicePromise = null;
let sayHelloServiceEndpoint = { url: null };

(async function () {
    // Connect to externa SOAP service
    sayHelloServicePromise = getSoapService('sayHello', './srv/external/hello.wsdl', sayHelloServiceEndpoint);
})();

/*** HANDLERS ***/

async function readSayHello(req) {
    try {
        // Get the SOAP client for the sayHello service
        const sayHelloService = await sayHelloServicePromise;
        sayHelloService.setEndpoint(sayHelloServiceEndpoint.url);

        // Set the parameters for the QuerySayHelloIn method of the sevice
        const param = {
                firstName: req?.user?.id || 'Example SITBNE'
        };

        // Invoke QuerySayHelloIn method asynchronously and wait for the response
        const resp = await sayHelloService.sayHelloAsync(param);

        // Prepare the actual service response
        // Do whatever transformation you need to do here 
        const sayHellos = [{...resp[0], ...param}];


        return sayHellos;
    } catch (err) {
        req.error(err.code, err.message);
    }
}

module.exports = {
    readSayHello
}