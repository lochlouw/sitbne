# SAP Inside Track Brisbane - Integration Approaches with CAP on BTP

![Instide Track Brisbane Banner](/images/sitbne-banner.png)

![Node.js 18.18.0](https://img.shields.io/badge/Node.js-v18.18.0-green)
![@sap/cds 7.7.0](https://img.shields.io/badge/@sap/cds-v7.7.0-green)

## Introduction

In the SAP world there are multitude of solutions, frameworks and tools to do integrations. It certainly is a daunting task to choose the right tool for the job. Over the years there has been numereous attempts to harmonise process and data integrations without any clear winner, as always the choice needs to be based on a multitude of competing factors, so as always "it depends".

The typical integrations protocols that customers still use range from: 
- File Based (Fixed Width, CSV, TSV, Excel)
  - SFTP
- SOAP
- RFC
- Plain HTTP 
  - REST
  - [OData](https://www.odata.org/)
  - [GraphQL](https://graphql.org/)
- [AsyncAPI](https://www.asyncapi.com/)
- [gRPC](https://grpc.io/)

This does not even include variants that include Event Driven Based Architectures

## SAP Cloud Application Programming Model
In SAP S/4HANA Cloud, side-by-side extensibility allows you to build loosely coupled but tightly integrated extensions. These extensions can be developed either via stable APIs or by leveraging business events from SAP products, such as SAP S/4HANA. Essentially, side-by-side extensions operate outside the core of SAP S/4HANA, enabling flexibility and adaptability to changing business needs.

CAP (Cloud Application Programming Model) plays a crucial role in achieving extensibility and connectivity within SAP applications

## Links
- [Cloud Application Programming Model (CAP)](https://cap.cloud.sap/docs/)
- [Core Services for SAP BTP](https://api.sap.com/package/SAPCloudPlatformCoreServices/rest)
- [node-soap](https://github.com/vpulim/node-soap) - A SOAP client and server for node.js.