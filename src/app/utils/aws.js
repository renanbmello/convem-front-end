const AWS = require('aws-sdk');
require('dotenv').config();

const config = {
  region: 'sa-east-1', 
  accessKeyId: process.env.ACCESSKEYID, 
  secretAccessKey: process.env.SECRETACCESSKEY,
};

const dynamodb = new AWS.DynamoDB(config);

module.exports = dynamodb;
