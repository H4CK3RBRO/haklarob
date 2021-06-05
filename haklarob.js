const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');
const hedefimiz = require('./hedef.json');
const { readdirSync } = require('fs');
const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = "?"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

client.on("error", console.error);

client.on('ready', () => {
    console.log('Bot Aktif :) Created By: Yusuf Ahmet Eden')
    const durumlar = [
      "Hergün Daha Da Gelişen Bot.",
      "Yapımcı: HACKERBRO#6002",
      "https://discord.ly/haklarob",
      "ALFA SÜRÜM",
      "Prefix = ?",
      "Önerilerinizi Bizimle Paylaşabilirsiniz.",
      "Hedef Sunucu: 75",
      "?yardım",
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
      client.user.setActivity(durum)
    }, 5000);
});

client.off('ready', () => {
    console.log('Bot Aktif :) Created By: Yusuf Ahmet Eden')
    client.user.setActivity('Şuan Büyük Bir Bakımda... Birazdan Tam hizmete Sunulacaktır.')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım. Hemen Geliştiricime Bildir.`);
        try {
            client.commands.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }
    }
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

client.login('ODM0MzM1OTM3NzA5NzM1OTU2.YH_Z5A.IAMTK2gRRgNuqS5q0gRQKz_1cuU');
