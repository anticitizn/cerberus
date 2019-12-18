const Discord = require('discord.js');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Hello, I'm Cerberus the Bot, part of the Cerberus Protocol!")
  .setAuthor("Cerberus")
  .setColor(0x00AE86)
  .setDescription("My creator and master is anticitizen, who is currently working on me to expand my abilities. There are several minigames currently being planned and developed!")
  .setFooter("If you have any ideas or suggestions, please contact anticitizen#0067")
  .setThumbnail("https://cdn.dribbble.com/users/5518/screenshots/1092257/_2x_cerberus.png")
  .setTimestamp()
  .addField("Command list",
    "$help $ping $duel $pfp $ree $down $status $reload $eval")
  .addBlankField(true)
 
  message.channel.send({embed});

}