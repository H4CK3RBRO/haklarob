module.exports = {
  kod: "topla",
  async run (client, message, args){
    const {MessageEmbed} = require('discord.js')
    let sayı1 = args[0]
    let sayı2args = message.content.split(' ').slice(2)
    let sayı2 = sayı2args.join(" ")
    const embed = new MessageEmbed()
    .setTitle('Toplama İşlemi')
    .setDescription('Cevap: ' + sayı1 + '+' + sayı2 + '=' + sayı1+sayı2 )
  }
}
