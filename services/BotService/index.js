/*
 Bot Service.
 Service for creating bot instance with functions like sending a message and setting listeners.
 */
const TelegramBot = require('node-telegram-bot-api')
const token = require('./../../config/env').telegramToken

const _ = require('lodash')
const WitAiService = require('./../WitAiService')

const utils = require('./helpers/message')

// Beymax bot instance.
let Beymax = {}

function initiate () {
  // Create new Telegram Bot. Docs [https://github.com/hosein2398/node-telegram-bot-api-tutorial#First+message].
  Beymax = new TelegramBot(token, {polling: true})
  setListenersForBot(Beymax)
}

function setListenersForBot (bot) {
  // Set initial listener.
  bot.on('message', function (message) {
    // Whatever message will be.
    defineMessage(message, bot)
  })

  bot.on('edited_message', function (message) {
    // Whatever message will be.
    bot.sendMessage(message.chat.id, 'Don\'t change it, be confident')
  })
}

function defineMessage (message, bot) {
  // TODO: develop router for messages.
  if (message.text.indexOf('Hi') > -1) {
    return bot.sendMessage(message.chat.id, `Hi ${message.from.first_name}. Write me what films do you like to watch.`)
  }

  WitAiService.sendQuestion(message.text)
    .then(answer => {
      let answerToSend = utils.parseWitAnswer(answer.entities.film_type)
      bot.sendMessage(message.chat.id, answerToSend)
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports = {
  initiate
}
