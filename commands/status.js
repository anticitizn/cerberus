exports.run = (client, message, args) => {
	message.channel.send(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers for ${client.users.size} users.`)

}