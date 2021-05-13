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

client.off('ready', () => {
    console.log('Bot Aktif :) Created By: Yusuf Ahmet Eden')
    const durumlar = [
      "Hergün Daha Da Gelişen Bot.",
      "Yapımcı: HACKERBRO",
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

client.on('ready', () => {
    console.log('Bot Aktif :) Created By: Yusuf Ahmet Eden')
    client.user.setActivity('Şuan Büyük Bir Bakımda... Birazdan Tam hizmete Sunulacaktır.')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);
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
  if (message.content.toLowerCase() === 'kim') {
    message.channel.send('o');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'Nabıyon') {
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
  if (message.content.toLowerCase() === 'davet') {
    message.delete()
    message.reply('HAKLAROB DAVET LİNKİ;https://discord.com/oauth2/authorize?client_id=834335937709735956&scope=bot&permissions=8')
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'salak') {
    message.delete()
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Lütfen Kurallara Uyarak Argo Kelime Kullanma! ')
    .setColor('RED')
    message.author.send('Lütfen Kurallara Uy!')
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'mal') {
    message.delete()
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Lütfen Kurallara Uyarak Argo Kelime Kullanma! ')
    .setColor('RED')
    message.author.send(embed)
  }
});

client.on("guildMemberAdd", member => {
  let role = member.guild.roles.cache.find(role => role.name === 'kayıtsız');
  member.roles.add(role)
});

client.on('guildMemberRemove', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
  girişçıkış.send(` ${member} Sunucumuzdan Ayrıldı, Üye Sayısı ${member.guild.memberCount} Kişi, Hedef ${hedef}`);
});

client.on('guildMemberAdd', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
  girişçıkış.send(` ${member} Sunucumuza Hoşgeldin, Seninle Beraber ${member.guild.memberCount} Kişiyiz, Hedef Üye sayısı ${hedef}`);
});

client.login('ODM0MzM1OTM3NzA5NzM1OTU2.YH_Z5A.IAMTK2gRRgNuqS5q0gRQKz_1cuU');