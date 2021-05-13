module.exports = {
  kod: "öner",
  async run (client, message, args) {
    const önerimesajı = message.content.split(' ').slice(1)
    const öneri = önerimesajı.join(" ")
    const kanal = client.channels.cache.find(ch => ch.id === '837587117906722826')
    message.react('✅')
    kanal.send(öneri + ' - ' + '<@' + message.author.id + '>')
    message.author.send('Öneriniz Gönderildi. ✅. Daha Fazla Öneriniz varsa bize söylemeyi Unutmayın.').then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 50000);
    })
  }
}
