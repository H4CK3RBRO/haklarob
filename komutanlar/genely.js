module.exports = {
  kod: "genel",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setAuthor('HAKLAROB')
    .setDescription('Sunucudaki Herkesin Kullanılabileceği komutlar.')
    .addField('```?öner (öneri)```', 'Bot ile alakalı öneriniz varsa geliştiriciye bildirir.')
    .addField('```?ping```', 'Botun Ping Değerini Gösterir.')
    .addField('```?is```', 'Botun istitastiklerini gösterir.')
    .addField('```?vote```', "Bot'a oy vermek için bağlantı.")
    .addField('```?p (şarkı)```', 'Yazdığınız şarkıyı Youtubeden bulup çalar.' )
    .addField('```?taşı #kanal```', 'Botu olduğu kanaldan etiketlediğiniz kanala taşır.')
    .addField('```?ayrıl```', 'Botu sesli kanaldan ayırır.')
    .setColor('RANDOM')
    .setFooter('Daha fazla komut için önerilerinizi bekliyoruz :)')
    message.channel.send(embed)
  }
}
