const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logou como ${client.user.tag}!`);
});

const DELAY = 10000;

const cooldowns = {
    "como comprar": 0,
    "como compro": 0,
    "como compra": 0,
    "onde compra": 0,
    "onde compro": 0,
    "posso comprar aonde": 0,
    "me ajuda a comprar": 0,
    "alguem me ajuda": 0,
    "preciso de ajuda": 0,
    "guia comprar": 0,
    "prazo": 0,
    "entrega": 0,
    "Prazo": 0,
    "Prazos": 0,
    "prazos": 0,
    "quanto tempo demora": 0,
    "quanto tempo fica pendente": 0,
    "taxa": 0,
    "Taxa": 0,
    "taxas": 0,
    "30%": 0,
    "grupo": 0,
    "grupo roblox": 0,
    "por grupo": 0
};

const jsonMessage1 = {
    "embeds": [
        {
            "title": "🎪 │ **Guia de Como Comprar**",
            "description": "**🎈 Compras de Robux:**\n- Para mais informações, acesse o canal: [Como Comprar](https://discord.com/channels/1187947032183308389/1218036193195724851)\n- Preços? Não se preocupe, temos uma lista bem aqui: [Lista de Preços](https://discord.com/channels/1187947032183308389/1271254027887186001)\n- E por fim, onde comprar? Acesse e abra um ticket em: [Robux](https://discord.com/channels/1187947032183308389/1270156264910880848)\n\n**🎈 Compras de Gamepass de Jogos:**\n- Acesse o canal respectivo de sua gamepass para fazer a compra.\n- Não achou o canal do jogo que gostaria? Acesse a aba: [Outros Jogos](https://discord.com/channels/1187947032183308389/1271258269305802774)",
            "color": 9445686,
        }
    ],
};

const jsonMessage2 = {
    "embeds": [
        {
            "title": "🎪 │**Prazos de Entrega** ",
            "description": "**🎈 Compras de Robux:**\n- 3 dias para entregas após a confirmação da compra dos robux.\n- De **1 à 2 dias** para aparecer nos pendentes do roblox após confirmação de entrega em: [Entregue](https://discord.com/channels/1187947032183308389/1245079971857432688)\n- Até **5 à 7 dias** para ser creditado na conta após estar nos [pendentes](https://www.roblox.com/transactions)",
            "color": 9445686,
        }
    ],
};

const jsonMessage3 = {
    "embeds": [
        {
            "title": "🎪 │**Taxa** ",
            "description": "**🎈 Sobre a Taxa do Roblox:**\n- O Roblox aplica uma taxa de **30%** sobre o valor total de cada compra.\n- Por exemplo, ao comprar **1.000 Robux**, você precisa criar um passe de **1.429 Robux** para que, após a dedução da taxa, receba o valor desejado.\n- **Cobrimos essa taxa** sem custo adicional para você! Você não precisa se preocupar em ajustar os valores de seus passes.\n\n[Saiba mais aqui.](https://create.roblox.com/docs/pt-br/production/monetization/game-passes)",
            "color": 9445686,
        }
    ],
};

const jsonMessage4 = {
    "embeds": [
        {
            "title": "🎪 │**Via Grupo** ",
            "description": "**🎈 Compras de Robux**\n\n- Aviso Importante: No momento, a opção de entrega de Robux por grupo ainda não está disponível. Estamos trabalhando para oferecer esse serviço em breve.\n\n- Entrega por Gamepass: A entrega de Robux através de gamepass está totalmente funcional!",
            "color": 9445686,
        }
    ],
};

const keywordEmbeds = {
    "como comprar": jsonMessage1,
    "como compro": jsonMessage1,
    "como compra": jsonMessage1,
    "onde compra": jsonMessage1,
    "onde compro": jsonMessage1,
    "posso comprar aonde": jsonMessage1,
    "me ajuda a comprar": jsonMessage1,
    "alguem me ajuda": jsonMessage1,
    "preciso de ajuda": jsonMessage1,
    "guia comprar": jsonMessage1,
    "prazo": jsonMessage2,
    "entrega": jsonMessage2,
    "Prazo": jsonMessage2,
    "Prazos": jsonMessage2,
    "prazos": jsonMessage2,
    "quanto tempo demora": jsonMessage2,
    "quanto tempo fica pendente": jsonMessage2,
    "taxa": jsonMessage3,
    "Taxa": jsonMessage3,
    "taxas": jsonMessage3,
    "30%": jsonMessage3,
    "grupo": jsonMessage4,
    "grupo roblox": jsonMessage4,
    "por grupo": jsonMessage4,
};

client.on('messageCreate', message => {
    const ignoredChannelId = '1187955699972579348';
    if (message.channel.id === ignoredChannelId || message.author.bot) return;

    for (const [keyword, embed] of Object.entries(keywordEmbeds)) {
        if (message.content.toLowerCase().includes(keyword)) {
            const currentTime = Date.now();

            if (currentTime - cooldowns[keyword] >= DELAY) {
                message.reply({ embeds: [embed.embeds[0]] });
                cooldowns[keyword] = currentTime;
            } else {
                const timeLeft = Math.ceil((DELAY - (currentTime - cooldowns[keyword])) / 1000);
                message.reply(`Por favor, aguarde ${timeLeft} segundos para usar o comando novamente.`);
            }

            break;
        }
    }
});

client.login('token');
