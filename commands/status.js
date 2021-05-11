exports.run = (client, message, args) => {
	message.channel.send(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers for ${client.users.cache.size} users.`)
}