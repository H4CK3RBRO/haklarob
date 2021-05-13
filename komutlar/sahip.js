module.exports = {
  kod: "sahip",
  async run (client, message, args){
    if (message.author.id !== "709349764113629236") {
      message.author.send("Sende Kimsin?")
    } else {
      message.channel.send("Sen benim sahibimsin")
    }
  }
}
