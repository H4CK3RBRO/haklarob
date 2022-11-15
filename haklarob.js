const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

client.on('ready', () => {
    console.log('Bot Aktif :) Created By: Yusuf Ahmet Eden')
    const durumlar = [
      ":)",
      ":D",
      ":)",
      ":|",
      ":(",
      ":|"
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
      client.user.setActivity(durum)
    }, 5000);
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sa') {
    message.channel.send('AleykümSelam,Hoşgeldin');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'hb') {
    message.channel.send('Nasılsın');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'iyiyim sen') {
    message.channel.send('Bende iyiyim Elhamdülillah');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'nabıyon') {
    message.channel.send('İyiyim Bea,Sen napıyon');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'iyi geceler') {
    message.react('🌇')
    message.channel.send('Sanada iyi Geceler');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'siktir') {
    message.delete()
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Lütfen Kurallara Uyarak Argo Kelime Kullanma! ')
    .setColor('RED')
    message.author.send(embed)
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oç') {
    message.delete()
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Lütfen Kurallara Uyarak Argo Kelime Kullanma! ')
    .setColor('RED')
    message.author.send(embed)
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'amk') {
    message.delete()
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Lütfen Kurallara Uyarak Argo Kelime Kullanma! ')
    .setColor('RED')
    message.author.send(embed)
  }
});

client.login('NzA5MzQ5NzY0MTEzNjI5MjM2.GoFYdL.g5gNtopL9XGMFvHPruYNLrScMJdmEGuiS53rUI');
