module.exports = {
  kod: "davet",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setAuthor('HAKLAROB', 'https://cdn.discordapp.com/attachments/837587117906722826/842392045225508884/HAKLAROB.jpg')
    .setTitle('HAKLAROB')
    .setDescription('Eğer Botu Sevdiyseniz Bot Davet etmek için ```^ HAKLAROB ^``` Başlığına tıklayınız.')
    .addField('Botun Sunucusu ;', 'https://discord.gg/F6r5Hvyxxr')
    .setURL('https://discord.com/oauth2/authorize?client_id=834335937709735956&scope=bot&permissions=8')
    .setColor('00f6ff')
    message.channel.send(embed)
  }
}
