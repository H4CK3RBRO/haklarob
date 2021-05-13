module.exports = {
  kod: "zamanla",
  async run (client, message, args){
    if (isNaN(args[0])) return message.reply('Lütfen Bir Değer Giriniz');
    let args1 = message.content.split(' ').slice(2)
    let mesaj = args1.join(" ")
    message.reply('Başarıyla zamanlayıcı oluştu.')
    message.react('⏱')
    setInterval(function () {
      message.channel.send(mesaj)
    }, args[0] * 1000);
 }
}
