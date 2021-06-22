module.exports = {
  kod: "vote",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setAuthor('HAKLAROB')
    .setDescription('Botun yaygınlaşması için her 12 saatte linkten oy verebilirsiniz.')
    .addField('https://discord.ly/haklarob.js', '^ Linke Basıp Oy verebilirsiniz. ^')
    .setURL('https://discord.com/oauth2/authorize?client_id=834335937709735956&scope=bot&permissions=8')
    .setColor('00f6ff')
    .setFooter('Yardımlarınız karşılıksız kalmayacak :)')
    message.channel.send(embed)
  }
}
