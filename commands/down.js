exports.run = (client, message, args) => {
	if (!args || args.length < 1) return message.reply("you must provide a valid dOwN.")

	var autismCase = function (s) {
		var chars = s.toLowerCase().split("");
		for (var i =0; i< chars.length; i+= 2) {
			chars[i] = chars[i].toUpperCase();
		}
		return chars.join("");
	}

	var downText = autismCase(args.join(" "))

	message.channel.send(downText)

}