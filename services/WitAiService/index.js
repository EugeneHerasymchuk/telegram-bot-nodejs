/*
 Wit.ai Service.
 Service for sending requestst to api Wit.ai.
 */
const {Wit, log} = require('node-wit');
const witToken = require('./../../config/env');

const client = new Wit({
  accessToken: witToken,
  logger: new log.Logger(log.DEBUG) // optional
});

console.log(client.message('set an alarm tomorrow at 7am'));