module.exports = {
  kod: "eval",
  async run (client, message, args){
    let { MessageEmbed } = require('discord.js')
    if (!args[0]) return message.channel.send('Lütfen Çalışacak kodu yazınız.')
    if (message.author.id !== "709349764113629236") return message.channel.send("Sen Yapamazsın")
    try {
    let komut = eval(args.join(" "))
    let potansiyelÇıktılar = ["string", "boolean", "number", "float"]
    if (potansiyelÇıktılar.includes(typeof komut)){
      let embed = new MessageEmbed()
      .setDescription("**Başarılı**")
      .setField("Girdi", "```js\n" + args.join(" ") + "\n```")
      .setField("Çıktı", "```js\n" + komut + "\n```")
      .setColor('GREEN')
      message.channel.send(embed).then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 5000);
    })
      message.react("✅")
    } else {
      let embed = new MessageEmbed()
      .setDescription("**Başarılı**")
      .addField("Girdi", "```js\n" + args.join(" ") + "\n```")
      .addField("Çıktı", "```\n" + require('util').inspect(komut) + "\n```")
      .setColor('GREEN')
      message.channel.send(embed).then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 5000);
    })
      message.react("✅")
    }
  } catch(err){
    let embed = new MessageEmbed()
    .setDescription("**HATA**")
    .addField("Girdi", "```js\n" + args.join(" ") + "\n```")
    .addField("Çıktı", "```js\n" + err + "\n```")
    .setColor('RED')
    message.channel.send(embed).then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 5000);
    })
    message.react("❌")
  }
  }
}
