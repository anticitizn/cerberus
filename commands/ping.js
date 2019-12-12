exports.run = (client, message, args) => {
	 var d = Math.random();
      if (d < 0.1) {
          message.channel.send("Aw, shucks, I missed! You win, ".concat(message.member.user.username).concat("!"));
      }
      else if (d > 0.9) {
          message.channel.send("Haha, you missed! ".concat(message.member.user.username).concat(" you're a loser!"));
      }
      else {
    message.channel.send("Pong!");
    }
}