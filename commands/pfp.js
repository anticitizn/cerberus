exports.run = (client, message, args) => {
	client.users.fetch(args).then(myUser => {
    	message.reply(myUser.avatarURL()); // My user's avatar is here!
	});
}
