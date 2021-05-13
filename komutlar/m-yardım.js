module.exports = {
  kod: "m-yardım",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Moderatör komutlarını öğrenmek için yönetici izne sahip olman gerekiyor ')
    const embed = new MessageEmbed()
    .setTitle('Moderasyon komutları:')
    .addField('```?ban @kişi``` ;', 'Etiketlenen kişiyi Sunucudan engeller.')
    .addField('```?unban ID``` ;', 'Banlanan Kişinin Engelini kaldırır.')
    .addField('```?kick @kişi``` ;', 'Etiketlenen kişiyi sunucudan atar. ')
    .addField('```?zamanla (saniye) (mesaj)``` ;', 'Ayarladığınız saniye aralıkta mesaj gönderir.')
    .addField('```?çekiliş (saniye) (Çekiliş)``` ;', 'Ayarladığınız saniye sonra raskele birisini seçer.')
    .addField('```?sil (Sayı)``` ;', 'Belirlediğiniz Sayıdaki Mesajları Siler.')
    .addField('```?özel @kişi (mesaj)``` ;', 'Etiketlediğiniz kişiye dm den mesaj gönderir.')
    .addField('```?duyur #kanal (mesaj)``` ;', 'Etiketlediğiniz Kanala Mesajınızı Gönderir.')
    .addField('```?rolver @kişi @rol``` ;', 'etiketlediğiniz kişiye etiketlediğiniz rolü verir.')
    .addField('```?açıklama (Açıklama)``` ;', 'Olduğunuz Kanalın açıklamasını değiştirir.')
    .setColor("YELLOW")
    message.channel.send(embed)
  }
}
