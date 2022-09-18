const aoijs = require("aoi.js")
const config  = require("./config.json")

const bot = new aoijs.AoiClient({
  token: config.token,
  prefix: config.prefix,
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.status({
    text: "Superlandia Roleplay",
    type: "PLAYING",
    status: "online",
    time: 12
})


//Events
bot.onMessage()

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

/*const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
    website: "url",
    title: "name",
    interval: 2
}); */
