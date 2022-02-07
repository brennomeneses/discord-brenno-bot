const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('main').setDescription('Expõe meu main no Vava'),
	new SlashCommandBuilder().setName('musica').setDescription('Deixa eu te recomendar uma música'),
	new SlashCommandBuilder().setName('bagre').setDescription('Bagre'),
	new SlashCommandBuilder().setName('pedro').setDescription('Pedros...'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);