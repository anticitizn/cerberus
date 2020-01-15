exports.run = (client, message, args) => {
	var sleep = require('system-sleep');

	let author = message.author.username
	let duellist = message.mentions.users.first()
	if(!duellist) return message.reply(" you did not specify who you want to duel!")

	if (duellist.id == message.author.id) return message.reply(" you can't duel yourself... or can you?")

	if (duellist.bot == true) return message.reply(" you can't duel a bot, that's unfair.. for you!")

	let fighter1n = message.author.username
	let fighter2n = duellist.username

	let fighter1 = message.author.id
	let fighter2 = duellist.id

	function msgedit(content) {
		msg.edit(content)
	}

	var challenged = duellist.toString();
    message.channel.send(`${challenged}, ${author} thinks he's the baddest gun around. Will you prove him wrong, yes or no?`)
        .then(() => {
            message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
                max: 1,
                time: 60000,
                errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().content == 'yes') {
                    message.channel.send(`There's one too many bad guns in town! ${challenged} and ${author}, get ready to shoot at sundown!`);
                    message.channel.send(':sunrise_over_mountains:')
						  .then((msg)=> {
							  setTimeout(function(){
							    msg.edit(':desert:');
							  }, 2000)
							  setTimeout(function(){
							    msg.edit(':city_sunset:');
							  }, 4000)
							  setTimeout(function(){
							    msg.edit(':city_dusk:');
							  }, 6000)
							  sleep(6000)
							  const filter = m => m.content.includes('pew')

							  message.channel.awaitMessages(filter, { maxMatches: 1, time: 5000, errors: ['time'] })
								.then(collected => {
									let winner, loser
								  	if (collected.first().author.id == fighter1) {
								  		winner = fighter1n
								  		loser = fighter2n
								  	} else {
								  		winner = fighter2n
								  		loser = fighter1n
								  	}
									message.channel.send(`And the swiftness of ${winner} is still talked about today`)
							  		message.channel.send(`${loser} had not cleared leather for a bullet fairly ripped`)
							  		message.channel.send(`And ${winner}'s aim was deadly with the **big iron on his hip**`)
								})
								.catch(collected => {
									message.channel.send('Looks like our cowboys fell asleep! No guns shall be drawn today');
							  });
						  })
                }
                else if(collected.first().content == 'no') {
                    message.channel.send('The tick of the clock says death will wait ten minutes more..');
                }
            })
            .catch(() => {
                message.channel.send("No response. Duel has been cancelled.");
            });
        });       
}