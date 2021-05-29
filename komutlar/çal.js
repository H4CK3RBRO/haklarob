const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "p",
  async run (client, message, args){
    if (!args[0]) return message.channel.send('Lütfen bir Şarkı giriniz.');
    if (message.member.voice.channel){
      const connection = await message.member.voice.channel.join()
      const şarkı = await player(args.join(" "))
      şarkı.play(connection)
    } else {
      message.reply('Lütfen Sesli bir kanala Katıl.')
    }
  }
}
