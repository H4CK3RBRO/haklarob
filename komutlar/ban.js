module.exports = {
  kod: "ban",
  async run (client, message, args) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Sen Moderatör Değilsin!')
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Benim Yetkim Yok.')
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .ban('Denetim günlüklerinde görüntülenecek isteğe bağlı neden')
        .then(() => {
          const embed = new MessageEmbed()
          .setTitle('LOG OLAYI')
          .setDescription('Olay: `Ban`')
          .addField('Üye:', member)
          .addField('Neden:', neden)
          message.channel.send(embed)
        })
        .catch(err => {
          message.reply("Üyeyi ban'layamadım");
          console.error(err);
        });
    } else {
      message.reply("Kullanıcı bu Sunucuda değil!");
    }
  } else {
    message.reply("Kullanıcıya ban atmasını söylemedin!");
  }
  }
};
