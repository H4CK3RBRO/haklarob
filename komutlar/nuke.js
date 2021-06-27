const Discord = require('discord.js')

module.exports = {
    kod: 'nuke',
    async run (client, message, args){
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sen Moderatör Değilsin!')
        message.channel.clone().then(message => message.send('☢️ Bombalama Başarılı ☢️'))
        message.channel.delete()
    }
}
