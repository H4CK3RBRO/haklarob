module.exports = {
  kod: "kick",
  async run (client, message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Sen Moderatör Değilsin!')
    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('Benim Yetkim Yok.')
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .kick('Denetim günlüklerinde görüntülenecek isteğe bağlı neden')
        .catch(err => {
          message.reply('Üyeyi malesef atamadım');
          console.error(err);
        });
    } else {
      message.reply("Kullanıcı bu Sunucuda değil!");
    }
  } else {
    message.reply("Kullanıcıya kick atmasını söylemedin!");
  }
  }
};
