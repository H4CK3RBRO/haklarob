module.exports = {
  kod: "duyur",
  async run (client, message,){
    const kanal = message.mentions.channels.first();
    const args = message.content.split(' ').slice(2)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Duyuru yapmak için Yetkiniz yok.');
    if (!botmesajı) return message.reply('Duyuruyu yazmadınız.');
    if (!kanal) return message.reply('Kanalı Tanımlamadınız .');
    message.delete(message.author)
    kanal.send(botmesajı)
  }
}
