exports.handler = async (event) => {
    // TODO implement
    'use strict';

    const AWS = require('aws-sdk');
    
    // Set the Region 
    AWS.config.update({
      accessKeyId: 'AKIA5ZLY3JU5VGDNM46F',
      secretAccessKey: '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',
      region: 'us-east-2',
      signatureVersion: 'v4'
    });
    console.log("s3 before")
    // Create the S3 service object
    const s3 = new AWS.S3();
    console.log("s3 created")
    
    console.log("1")
    console.log(event)
    // let requestObject = JSON.parse(event);
  
    const fileName = event.queryStringParameters['ObjectName'];
    console.log("2")
    // const fileType = 'csv';
    const myBucket = event.queryStringParameters['BucketName'];
    console.log("3")
  
    return s3.getSignedUrl('putObject', {
      "Bucket": myBucket,
      "Key": fileName
    });
};

