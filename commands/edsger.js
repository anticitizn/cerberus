exports.run = (client, message, args) => {
	const fs = require('fs');

	fs.readFile('assets/edsger_templates.json', 'utf8', (err, data) => {
		if (err) {
			console.log(`Error reading Dijkstra templates: ${err}`)
		} else {
			const templates = JSON.parse(data)
			let index = Math.floor(Math.random() * templates.length)
			message.channel.send(`> It is practically impossible to teach good programming to students that have had a prior exposure to **${templates[index]}**: as potential programmers they are mentally mutilated beyond hope of regeneration.\n > - Edsger W.Dijkstra, 18 June 1975`)
		}
	})
}