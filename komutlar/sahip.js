module.exports = {
  kod: "sahip",
  async run (client, message, args){
    if (message.author.id !== "709349764113629236,781105885878550528") {
      message.author.send("Sahibim <@709349764113629236> ve <@781105885878550528> ")
    } else {
      message.channel.send("Sen benim sahibimsin")
    }
  }
}
