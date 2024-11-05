const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === 'mensagem especifica' && !message.author.bot) {
        const embed = new EmbedBuilder()
            .setColor(0x00AE86)
            .setTitle('Resposta Automática')
            .setDescription('Esta é uma resposta automática para a mensagem específica.')
            .addFields(
                { name: 'Campo 1', value: 'Detalhes sobre o campo 1', inline: true },
                { name: 'Campo 2', value: 'Detalhes sobre o campo 2', inline: true }
            )
            .setTimestamp()
            .setFooter({ text: 'Mensagem enviada automaticamente pelo bot' });

        message.channel.send({ embeds: [embed] });
    }
});

client.login('MTI3MzAxNjg3MDYxMzY4NDIyNA.GTgjeP.KaknTL_4H5C38qwZ3hg4COUAhYzV7hnbcw7Npc');
