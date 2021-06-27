module.exports = {
  kod: "davet",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('HAKLAROB')
    .setDescription('Botu Davet etmek için aşşağıdaki bağlantıları deneyebilirsiniz.')
    .addField('Bot Davet Link:', '🔗https://discord.com/oauth2/authorize?client_id=834335937709735956&scope=bot&permissions=8')
    .addField('Botun Sunucusu ;', '🔗https://discord.gg/F6r5Hvyxxr')
    .addField('BotList :', '🔗https://discord.ly/haklarob')
    .setURL('https://discord.com/oauth2/authorize?client_id=834335937709735956&scope=bot&permissions=8')
    .setColor('00f6ff')
    .setFooter(message.author ,'tarafıından istendi.')
    message.channel.send(embed)
  }
}
