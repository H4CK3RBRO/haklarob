const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "p",
  async run (client, message, args){
    if (!args[0]) return message.channel.send('Lütfen bir Şarkı adı giriniz.');
    if (message.member.voice.channel){
      const connection = await message.member.voice.channel.join()
      const şarkı = await player(args.join(" "))
      şarkı.play(connection)
      const embed = new MessageEmbed()
      .setTitle('Şarkı Bulundu :)')
      .setDescription('Şarkı:' şarkı.title)
      .setThumbnail(şarkı.thumbnail)
      message.channel.send(embed)
    } else {
      message.reply('Lütfen Sesli bir kanala Katıl.')
    }
  }
}
