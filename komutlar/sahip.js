module.exports = {
  kod: "sahip",
  async run (client, message, args){
    if (message.author.id !== "709349764113629236") {
      message.channel.send("Sahibim <@709349764113629236>")
    } else {
      message.channel.send("Sen benim sahibimsin")
    }
  }
}
