const  Discord = require("discord.js")
const client = new Discord.Client 

client.on("ready", () => {
  console.log(`Loggin in as ${client.user.tag}! `)
})

client.on("message", ,sg => { 
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

client.login(process.env.TOKEN)