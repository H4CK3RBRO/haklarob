module.exports = {
  kod: "açıklama",
  async run (client, message, args){
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Kanal açıklamasını değiştirmek için **Moderatör** olmalısınız.')
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Benim Yetkim Yok.')
    if (!args[0]) return message.channel.send('Lütfen Kanal açıklamasını yazınız.')
    message.channel.setTopic(args.join(" "))
    message.react("✅")
  }
}
