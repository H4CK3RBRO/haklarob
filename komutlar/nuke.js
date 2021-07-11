const Discord = require('discord.js')

module.exports = {
    kod: 'nuke',
    async run (client, message, args){
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Bunu yapmak için gerekli yetkiye sahip değilsin.')
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Benim Yetkim Yok.')
        message.channel.clone().then(message => message.send('☢️ Bombalama Başarılı ☢️'))
        message.channel.delete()
    }
}
