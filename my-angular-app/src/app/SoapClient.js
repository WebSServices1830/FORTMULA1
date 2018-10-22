import convert from 'xml-js';

class SoapClient {
    convertOptions = { compact: true, spaces: 4 };

    constructor(wsdlUrl, wsdlNamespace = "http://piloto.co.edu.javeriana/") {
        this.wsdlUrl = wsdlUrl;
        this.wsdlNamespace = wsdlNamespace;
    }

    getRequestEnvelope(methodName, params) {
        const sampleEnvelope = {
            "soapenv:Envelope": {
                "_attributes": {
                    "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "xmlns:pil": this.wsdlNamespace
                },
                "soapenv:Header": {},
                "soapenv:Body": {
                }
            }
        };

        const body = sampleEnvelope["soapenv:Envelope"]["soapenv:Body"];
        body["pil:" + methodName] = {};

        const methodBody = body["pil:" + methodName];

        for (const prop in params) {
            methodBody[prop] = {
                "_text": params[prop]
            }
        }

        return convert.js2xml(sampleEnvelope, this.convertOptions);
    }

    getResponseFromEnvelope(envelope) {
        const jsonEnvelope = convert.xml2js(envelope, this.convertOptions);

        for (const rawAttr in jsonEnvelope) {
            if (rawAttr === "_declaration") {
                continue;
            }
            if (rawAttr.toLowerCase().includes("envelope")) {
                for (const envAttr in jsonEnvelope[rawAttr]) {
                    if (envAttr.toLowerCase().includes("body")) {
                        for (const responseAttr in jsonEnvelope[rawAttr][envAttr]) {
                            if (jsonEnvelope[rawAttr][envAttr][responseAttr]["return"] != null) {
                                return jsonEnvelope[rawAttr][envAttr][responseAttr]["return"];
                            }
                        }
                    }
                }
            }
        }
        return {};
    }

    invoke(methodName, params) {
        const body = this.getRequestEnvelope(methodName, params);

        const headers = new Headers();
        headers.append('Content-Type', 'text/xml');

        var options = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers,
            body
        };

        return fetch(this.wsdlUrl, options)
            .then(response => {
                return response.text();
            }).then(response => {
                return this.getResponseFromEnvelope(response);
            });
    }
}

export default SoapClient;