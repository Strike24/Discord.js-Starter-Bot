//import things.. (Discord.js, Token from config.json, etc)
const DiscordJS = require('discord.js');
const { token } = require('./config.json');

//Initialize the bot (client) & use all of the intents. (you can use specific intents if you want)
const client = new DiscordJS.Client({ intents: 32767 })

// ----------------------------------------------------------------------------------------------------------------------------------------------

// When the bot is ready, run this code (only once)
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
})

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Register Events
const eventsPath = path.join(__dirname, '/src/events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------
// Login to the Bot.


client.login(process.env.TOKEN)