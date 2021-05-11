exports.run = (client, message, args) => {
	if (!args || args.length < 1) return message.reply("you must provide a valid REEE.")

	for (i = 3; i <= args.length; i += 5) {
		let word = String(args[i])
		word = word.replace(/[aieou](?!.*[aieou])/g, "$&$&$&$&")
		args[i] = word
	}
	var reeText = args.map(function(x){ return x.toUpperCase() })
	reeTextString = reeText.join(" ")
	ree = " R".concat("E".repeat(args.length), "!")
	message.channel.send(reeTextString.concat(ree))

}