const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDMPermission(false)
		.setDescription('Replies with bot information!'),
	async execute(interaction) {
		await interaction.reply(`I am a bot that was designed for **SvnsxtDaisy'** Discord server! I can do *quite a few basic commands*, and that includes __showing your avatar, testing the latency, showing basic server information. However, I can't do **basic moderation actions ||(only because **the bot owner hasn't designed that yet** and **__doesn't know how to set up bots on Discord who can kick, ban, mute, and more using me__**)||. On the bright side, I can create **fake** moderation messages. ||Also they didn't add music commands, due to moderation reasons || In fact, I was created by Pandatea_World.`);
		await interaction.followUp(`Update 17/5/2024: The source code is created by AwesomeKid99999 `)
	},
};