/*
 Wit.ai Service.
 Service for sending requestst to api Wit.ai.
 */
const {Wit, log} = require('node-wit')
const witToken = require('./../../config/env').witToken

const client = new Wit({
  accessToken: witToken
  // logger: new log.Logger(log.DEBUG) // optional
})

module.exports = {
  sendQuestion (question) {
    return client.message(question)
  }
}
