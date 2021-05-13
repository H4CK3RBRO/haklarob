module.exports = {
  kod: "kick",
  async run (client, message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sen Moderatör Değilsin')
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .kick('Denetim günlüklerinde görüntülenecek isteğe bağlı neden')
        .then(() => {
          const kanal = message.guild.channels.cache.find(ch => ch.id === '739824165703385138')
          const embed = new MessageEmbed()
          .setTitle('LOG OLAYI')
          .setDescription('Olay: `Kick`')
          .addField('Kişi:', member)
          .addField('Neden:', neden)
          kanal.send(embed)
        })
        .catch(err => {
          message.reply('Üyeyi atamadım');
          console.error(err);
        });
    } else {
      message.reply("Bu kullanıcı bu loncada değil!");
    }
  } else {
    message.reply("Kullanıcıdan tekme atmasını söylemedin!");
  }
  }
};
