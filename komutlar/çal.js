const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "çal",
  async run (client, message, args){
    if (!args[0]) return message.channel.send('Lütfen Bir Şarkı adı Giriniz.');
    if (message.member.voice.channel){
      const connection = await message.member.voice.channel.join()
      const song = await player(args.join(" "))
      song.play(connection)
      message.channel.send(`${şarkı.title}`)
    } else {
      message.reply('Lütfen bir sesli kanala katılınız.')
    }
  }
}
