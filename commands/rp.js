exports.run = (client, message, args) => {

	if (!message.channel.nsfw) return message.reply("this command can only be used in NSFW channels.")

	const link = "https://prnt.sc/"
	amount = Number(args)

	function makeid(length) {
		var result = '';
		var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;

		for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
		}


	if (args && amount < 11) {
		for (var i = 0; i < amount; i++) {
			var randlink = link.concat(makeid(6))
			message.channel.send(randlink)
		}
	}
	if (!args || amount < 2) {
	var randlink = link.concat(makeid(6))
	message.channel.send(randlink)
	}
}