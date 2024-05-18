const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDMPermission(false)
		.setDescription('Replies with my commands you can use!'),
	async execute(interaction) {
		await interaction.reply(`**__Slash Commands:__**\n**/avatar** - Get the avatar URL of the selected user, or your own avatar.\n**/commands** - Replies with slash commands you can use!\n**/help** - Replies with bot information!\n**/jokeban** - Ban a member (or a non-member, and jokingly) from this server!\n**/jokekick** - Kick a member (or a non-member, and jokingly) from this server!\n**/jokemute** - Mute a member (or a non-member, and jokingly) in this server!\n**/jokewarn** - Warn a member (or a non-member, and jokingly) in this server!\n**/log** - Make me send a message to the console!\n**/ping** - Replies with "Pong" and the latency!\n**/time** - Replies with the current time! (it matches with your time zone) `);
	},
};