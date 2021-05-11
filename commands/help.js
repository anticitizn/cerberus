const Discord = require('discord.js');

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Hello, I'm Cerberus the Bot!")
  .setAuthor("Cerberus")
  .setColor(0x00AE86)
  .setDescription("My creator is anticitizen, who is probably slacking off right now instead of adding something cool to me")
  .setFooter("If you have any ideas or suggestions, please contact anticitizen#0067")
  .setThumbnail("https://cdn.dribbble.com/users/5518/screenshots/1092257/_2x_cerberus.png")
  .setTimestamp()
  .addField("Command list",
    "$help $ping $duel $pfp $ree $down $edsgar $status $reload $eval")
 
  message.channel.send({embed});

}