const awsLambdaFastify = require('aws-lambda-fastify');
const server = require('./index');

const proxy = awsLambdaFastify(server);

exports.handler = proxy;
