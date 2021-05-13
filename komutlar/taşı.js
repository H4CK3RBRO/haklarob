module.exports = {
  kod: "taşı",
  async run (client, message, args){
    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.channel.send('Kodu kullanmaya iznin yok', message.member.tag);
    const üye = message.mentions.members.first()
    if (!üye) return message.channel.send('Bir üye Belirtin.')
  }
}
