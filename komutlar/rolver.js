module.exports = {
  kod: "rolver",
  async run (client, message, args){
      let role = message.mentions.roles.first();
      let member = message.mentions.members.first();
      member.roles.add(role);
      const { MessageEmbed } = require('discord.js')
      const embed = new MessageEmbed()
      .setTitle('Başarılı')
      .setDescription('Rol, Başarıyla ' + '<@' + member + '>' + ' kişisine verildi.')
      .setColor('GREEN')
      message.channel.send(embed)
    }
  }
