module.exports = {
  kod: "hack",
  async run (client, message, args){
    const {MessageEmbed} = require('discord.js')
    let kişiargs = message.content.split(' ').slice(1)
    let kişi = ödülargs.join(" ")
    if (isNaN(time)) return;
    const embed1 = new MessageEmbed()
    .setTitle('👨‍💻 Hackleme İşlemi Başladı.')
    .setDescription(`${message.author}`, kişi )
    .setImage('https://i.giphy.com/media/iFOVMvOHlCCKEQ8PBq/giphy.gif')
    const embed2 = new MessageEmbed()
    .setTitle('👨‍💻 HACKLEME BAŞARILI! 👨‍💻')
    .setDescription(`${message.member}`, kişi , 'yi Hackledi')
    .setImage('https://blog.internetvista.com/wp-content/uploads/2018/02/website-defacement.gif')
    message.channel.send(embed1).then(embed => {
    setTimeout(function () {
      embed.edit(embed2)
    }, time * 1000);
  })
  }
}
