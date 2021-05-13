module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setAuthor('HAKLAROB', 'https://cdn.discordapp.com/attachments/837587117906722826/842370025444737034/HAKLAROB.jpg')
    .setTitle('Komutlar')
    .setColor("YELLOW")
    .setThumbnail('https://cdn.discordapp.com/attachments/837587117906722826/841680508970991626/HAKLAROB.jpg')
    .addField('?g-yardım', 'Herkesin Kullanabileceği genel komutlar.')
    .addField('?e-yardım', 'Çok Yakında!')
    .addField('?m-yardım', 'Moderatör komutları.')
    message.channel.send(embed)
  }
}
