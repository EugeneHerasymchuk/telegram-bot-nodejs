/*
  Bot Service.
  Service for creating bot instance with functions like sending a message and setting listeners.
 */
const TelegramBot = require('node-telegram-bot-api')
const token = require('./../../config/env').token

// Beymax bot instance.
let Beymax = {}

function initiate() {
  // Create new Telegram Bot. Docs [https://github.com/hosein2398/node-telegram-bot-api-tutorial#First+message].
  Beymax = new TelegramBot(token, {polling: true})

  setListenersForBot(Beymax)
}

function setListenersForBot(bot) {
  // Set initial listener.
  bot.on('message', function(message) {
    // Whatever message will be.
    bot.sendMessage(message.chat.id, 'Hi, my friend. I have no IQ to answer. Be patient.')
  })
}

module.exports = {
  initiate
}