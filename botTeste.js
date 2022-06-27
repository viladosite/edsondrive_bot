const env = require('./.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(content => {
    const from = content.update.message.from

    console.log(from)

    content.reply(`Olá ${from.fist_name}!`)
})

bot.startPolling()
console.log('Rodando bot...')