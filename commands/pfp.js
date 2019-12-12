exports.run = (client, message, args) => {
	client.fetchUser(args).then(myUser => {
    message.reply(myUser.avatarURL); // My user's avatar is here!
});
}
