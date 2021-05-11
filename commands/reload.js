exports.run = (client, message, args) => {
	if (!args || args.length < 1) return message.reply("you must provide a valid command name to reload.")
	const commandName = args[0]
	
	if(!client.commands.has(commandName)) {
		return message.reply("that command does not exist")
	}

	delete require.cache[require.resolve(`./${commandName}.js`)]

	client.commands.delete(commandName)
	const props = require(`./${commandName}.js`)
	client.commands.set(commandName, props);
	message.reply(`the command ${commandName} has been reloaded`)

}