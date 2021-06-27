module.exports = {
  kod: "eğlence",
  async run (client, message, args){
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Eğlence Komutları:')
    .addField('?hack @kişi', "Etiketlediğiniz kişiyi hack'ler.")
    .setFooter('Yeni komutlar gelecek, İyi Eğlenceler :)')
  }
}
