// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const musics = ["https://open.spotify.com/track/6Lah64e21cUytn0QXfuOoF?si=88f42425fbfc478a",
				"https://open.spotify.com/track/36ECEkodXYhLPyBHjZCEHh?si=d1c8cd52dba44203",
				"https://open.spotify.com/track/0Ti2dlF2xLjXblvdU5fCxM?si=8fd6ce04061141f4",
				"https://open.spotify.com/track/3uPvLoVTX6lHmGCIr7SU8s?si=ac20734d49454c7f",
				"https://open.spotify.com/track/4pADXqX5x76fDS8RmyvgwO?si=a6abc317e009413d",
				"https://open.spotify.com/track/1MTELuKDa4b8VOHF97ffuY?si=ceed14448f494127",
				"https://open.spotify.com/track/3wOKvS2aaiIj86KnAzMbV0?si=8bf3d8f03bf04094",
				"https://open.spotify.com/track/6sqMWTs2o6ixteLAhQOTSC?si=11582ff363584161"]

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'main') {
		await interaction.reply('https://pbs.twimg.com/media/Ez7bETyXMAcPNEQ.jpg');
	} else if (commandName === 'musica') {
		num = Math.floor(Math.random() * musics.length);
		await interaction.reply(musics[num]);
	} else if (commandName === 'bagre'){
		await interaction.reply('https://thumbs.gfycat.com/AdventurousBrightCuckoo-size_restricted.gif');
	} else if (commandName === 'pedro'){
		await interaction.reply('https://i.redd.it/x5fwdcqt6ht51.jpg');
	}
});

// Login to Discord with your client's token
client.login(token);