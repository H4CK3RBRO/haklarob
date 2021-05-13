module.exports = {
  kod: "avatar",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Avatarınız:')
    .setImage(message.author.displayAvatarURL({ dynamic: true}))
    .setColor("YELLOW")
    message.channel.send(embed)
  }
}
