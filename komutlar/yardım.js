module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setAuthor('HAKLAROB', 'https://cdn.discordapp.com/attachments/837587117906722826/842370025444737034/HAKLAROB.jpg')
    .setTitle('KOMUTLAR')
    .setColor("YELLOW")
    .setThumbnail(../haklarob.png)
    .addField('?genel', 'Herkesin Kullanabileceği genel komutlar.')
    .addField('?eğlence', 'Bota eklenen yeni eğlence komutları')
    .addField('?moderatör', 'Moderatör komutları.')
    message.channel.send(embed)
  }
}
