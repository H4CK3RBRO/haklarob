require('ytdl-core')
const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "çal",
  async run (client, message, args){
    if (!args[0]) return message.channel.send('Lütfen Bir Şarkı adı Giriniz.');
    if (message.member.voice.channel){
      const connection = await message.member.voice.channel.join()
      const şarkı = await player(args.join(" "))
      şarkı.play(connection)
      const embed = new MessageEmbed()
      .setTitle('Şarkı Bulundu:\n ')
      .setDescription(`**Video**: **[${şarkı.title}](${şarkı.url})**`)
      .setThumbnail(şarkı.thumbnail)
      .addField('Video açıklaması: ', `${şarkı.description}`)
      .addField("Video Link'i", `**${şarkı.url}**`)
      .addField("Video Süresi", `**${şarkı.time}**`)
      .setColor("YELLOW")
      message.channel.send(embed)
    } else {
      message.reply('Lütfen bir sesli kanala katılınız.')
    }
  }
}
