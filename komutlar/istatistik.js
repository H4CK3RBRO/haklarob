const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
module.exports = {
  kod: "is",
  async run (client, message) {
    const embed = new MessageEmbed()
    .setTitle('🔍 İstatistikler 🔍')
    .setDescription('Botun kaç sunucuda kaç kanalda ve kaç kişiyle etkileşim kurabileceğinin istitastikleri')
    .addField('Kullanıcı sayısı: ', client.users.cache.size)
    .addField('Sunucu Sayısı: ', client.guilds.cache.size)
    .addField('Kanal Sayısı: ', client.channels.cache.size)
    .setColor('GREEN')
    .setFooter('Her gün gelişmeye devam edeceğiz :)')
    message.channel.send(embed)
  }
}
