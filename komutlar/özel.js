module.exports = {
  kod: "özel",
  async run (client, message){
    const kişi = message.mentions.users.first();
    const args = message.content.split(' ').slice(2)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Duyuru yapmak için **Moderatör** olmanız lazım.')
    if (!botmesajı) return message.reply('Mesajı yazmadınız.');
    message.delete(message.author)
kişi.send(botmesajı)
  }
}
