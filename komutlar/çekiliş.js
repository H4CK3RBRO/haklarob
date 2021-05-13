module.exports = {
  kod: "çekiliş",
  async run (client, message, args){
    const {MessageEmbed} = require('discord.js')
    let time = args[0]
    let ödülargs = message.content.split(' ').slice(2)
    let ödül = ödülargs.join(" ")
    if (isNaN(time)) return;
    const embed1 = new MessageEmbed()
    .setTitle('Çekiliş Başladı')
    .setDescription(ödül)
    .setFooter('Çekiliş ' + time + ' saniye sonra açıklanacaktır.')
    const embed2 = new MessageEmbed()
    .setDescription('Çekiliş Bitti Kazanan - <@' + message.guild.members.cache.random() + '>')
    .setTitle(ödül)
    .setFooter('Tebrikler')
    message.channel.send(embed1).then(embed => {
    setTimeout(function () {
      embed.edit(embed2)
    }, time * 1000);
  })
  }
}
