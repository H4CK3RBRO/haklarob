module.exports = {
  kod: "vote",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('HAKLAROB OY')
    .addField('https://discord.ly/haklarob.js', '^ Linke Basıp Oy verebilirsiniz. ^')
    .setURL('https://discord.com/oauth2/authorize?client_id=834335937709735956&scope=bot&permissions=8')
    .setColor('00f6ff')
    message.channel.send(embed)
  }
}
