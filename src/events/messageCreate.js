const DiscordJS = require('discord.js')
module.exports = {
    name: 'messageCreate',
    execute(message) {

        // Basic MessageCreate Event
        // You can create basic "!" commands by modifing this code.
        // Slash Commands are better, but this is a good start. (will be added in the future 👀)

        let prefix = "!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.trim().split(/ +/g);
        const cmd = args[0].slice(prefix.length).toLowerCase();


        // Basic command that replies with "Pong", and after 3 seconds, edits the message.
        if (cmd === "ping") {
            message.reply("Pong 🏓").then((msg) => {
                setTimeout(() => {
                    msg.edit("Message edited after `3000ms`🏓\nOriginal Message: `" + msg.content + "`")
                }, 3000)
            })
        }

        // Basic command that sends an embed to the channel, you can take the embed and modify it.
        if (cmd === "help") {
            let helpEmbed = new DiscordJS.MessageEmbed()
                .setTitle("List Of Commands 📜") // Title of the embed
                .setDescription("This is a list of the aviailable commands.\nPrefix: `" + prefix + "`") // Sets the description of the embed.
                .addField("!ping", "Replies with `Pong`") // Add Fields with a title and a description.
                .addField("!help", "Sends this embed.")
                .setColor("RANDOM") // Or any hex color code!
                .setTimestamp() // Sets the timestamp of the embed.

            message.channel.send({ embeds: [helpEmbed] }) // Sends an Array of embeds. (in this case only one).
        }

        // Basic Say Command that will make the bot say whatever you want.
        if (cmd === "say") {
            if (args[1]) { // Checks if there is a second argument or more, if not, it will do nothing.
                const sayMessage = args.slice(1).join(" "); // Anything after the command name will be the message.
                message.channel.send(sayMessage); // Sends the message.
                message.delete(); // Deletes the author message, so it looks like the bot said it.
            }
        }




    },
};