module.exports = {
  kod: "g-yardım",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setAuthor('HAKLAROB', 'https://cdn.discordapp.com/attachments/837587117906722826/842370025444737034/HAKLAROB.jpg')
    .addField('```?öner (öneri)```', 'Bot ile alakalı öneriniz varsa geliştiriciye bildirir.')
    .addField('```?ping```', 'Botun Ping Değerini Gösterir.')
    .addField('```?is```', 'Botun istitastiklerini gösterir.')
    .addField('```?sahip```', 'Botun yapımcısını Gösterir.')
    .addField('```?çal (şarkı)```', 'Yazdığınız şarkıyı Youtubeden bulup çalar.' )
    .addField('```?taşı #kanal```', 'Botu olduğu kanaldan etiketlediğiniz kanala taşır.')
    .addField('```?ayrıl```', 'Botu sesli kanaldan ayırır.')
    .setColor('RANDOM')
    message.channel.send(embed)
  }
}
