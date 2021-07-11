module.exports = {
  kod: "ayrıl",
  async run (client, message, args){
    if (!message.member.voice.channel) return message.channel.send('Lütfen Sesli Kanala katılınız.');
    if (!message.guild.me.voice.channel) return message.channel.send('Bot bir sesli kanalda değildir.')
    if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Botu Kanaldan ayırmak için Botla aynı kanala geç.')
    message.react('✅')
    message.member.voice.channel.leave()
  }
}
