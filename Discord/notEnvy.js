"use strict";
exports.__esModule = true;
var token = require("./client-token.json");
var Discord = require('discord.js');
/*
client.login(token.token);


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
    if (msg.content === 'test') {
        client.channels.cache.get("740362958323843132").send('Hello here!')
    }
  });
  */
function newBoost() {
    var client = new Discord.Client();
    client.login(token.token);
    client.on('ready', function () {
        console.log("Logged in as " + client.user.tag + "!");
        client.channels.cache.get("740362958323843132").send('Check https://docs.google.com/spreadsheets/d/1SrOnqY4_5DB3sDLsP2VYaQ1Ff32ZRd4ieXt4P2Iy-5A/edit#gid=883732723 for newest Boost Sheet ').then((function (result) {
            client.destroy();
        }));
    });
}
exports.newBoost = newBoost;
