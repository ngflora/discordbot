const Discord = require("discord.js");
require("dotenv").config()


const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN).then(() => {
    console.log('Connected to server')
}).catch((err) => {
    console.log(err)
});


bot.on('message', msg => {
    if (msg.author.username !== bot.user.username) {

    }


});

