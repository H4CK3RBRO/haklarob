module.exports = {
  kod: "moderatör",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Moderatör komutlarını öğrenmek için yönetici izne sahip olman gerekiyor ')
    const embed = new MessageEmbed()
    .setTitle('Moderasyon komutları:')
    .addField('```?ban @kişi (neden)``` ;', 'Etiketlenen kişiyi Sunucudan engeller.')
    .addField('```?unban ID``` ;', 'Banlanan Kişinin Engelini kaldırır.')
    .addField('```?kick @kişi (neden)``` ;', 'Etiketlenen kişiyi sunucudan atar. ')
    .addField('```?çekiliş (Dakika) (Çekiliş adı)``` ;', 'Ayarladığınız dakika sonra raskele birisini seçer.')
    .addField('```?sil (Sayı)``` ;', 'Kanaldaki belirlediğiniz Sayıdaki Mesajları Siler.')
    .addField('```?duyur #kanal (mesaj)``` ;', 'Etiketlediğiniz Kanala Mesajınızı Gönderir.')
    .addField('```?rolver @kişi @rol``` ;', 'etiketlediğiniz kişiye etiketlediğiniz rolü verir.')
    .addField('```?açıklama (Açıklama)``` ;', 'Kanalın açıklamasını değiştirir.')
    .setColor("CYAN")
    .setFooter('!Bazı Komutları Kullanabilmek için bota Yönetici iznini vermelisiniz!')
    message.channel.send(embed)
  }
}
