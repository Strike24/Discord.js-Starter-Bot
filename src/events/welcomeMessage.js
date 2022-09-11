const DiscordJS = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: 'guildMemberAdd',
    execute(member) {

        // Welcome Message Event
        // This event will send an embed when a user joins the server.
        // You can modify this code to your liking.

        // Get the channel by ID
        const channel = member.guild.channels.cache.get(config.welcome_channel)

        // Create the embed & send it to the same channel
        let welcomeEmbed = new DiscordJS.MessageEmbed()
            .setTitle("Hi, " + member.user.username + "! 👋")
            .setDescription("Welcome to " + member.guild.name + "! We hope you enjoy your stay here! 💖")
            .setColor("RANDOM")
        channel.send({ embeds: [welcomeEmbed] })


    }
}