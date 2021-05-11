exports.run = (client, message, args) => {
	if (!args || args.length < 1 || args[1] >= 2 || args[1] <= 6) return message.reply(" you must provide a valid user and grade.");

	let student = message.mentions.users.first();
	if (!student) return message.reply(" you must specify a valid user!")
	
}
