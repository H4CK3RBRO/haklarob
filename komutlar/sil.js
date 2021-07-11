module.exports = {
  kod: "sil",
  async run (client, message, args){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bunu yapamazsın')
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Benim Yetkim Yok.')
    if (isNaN(args)) return message.reply('Lütfen Bir Değer Giriniz');
    if (args < 2 || args > 100) return message.reply('Lütfen 2-100 Arasında Bir Değer Giriniz')
    message.channel.bulkDelete(Number(args))
    const { MessageEmbed} = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Mesajlar Başarıyla 🗑```Silindi```🗑')
    .setDescription('Silinen Mesaj Sayısı: ' + args)
    .setColor("RED")
    message.channel.send(embed).then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 5000);
    })
  }
}
