module.exports = {
  kod: "sahip",
  async run (client, message, args){
    if (message.author.id !== "709349764113629236") {
      message.channel.send("Gelişmemde yapımcıya yardımda bulunan kişi <@781105885878550528> ")
    } else {
      message.channel.send("Sen benim geliştiricimsin, aferim sana")
    }
  }
}
