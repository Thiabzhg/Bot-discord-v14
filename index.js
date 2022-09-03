const { GatewayIntentBits, Client, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
        //intentos requeridos o acciones a utilizar
    ]
});

const config = require(`${process.cwd()}/config.json`);
require('colors');

client.on('ready', () => {
    console.log('El bot está encendido con éxito'.green) //color quee quieras ocupar y texto e encedido
});

client.login(config.token)

client.on('messageCreate', async (message) => {
    if(message.author.bot || !message.guild || message.channel.type === 'dm') return;

    var prefix = config.prefix
    
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    client.color = config.color
   
    if(command === 'ping'){
        const embed = new EmbedBuilder()
            .setTitle ('🏓 PONG')
            .setDescription (`✅ ¡ Tu ping es de \`${client.ws.ping}ms\`!`)
            .setColor(client.color)
        message.channel.send({embeds: [embed]})
    }
})