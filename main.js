const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '7935974660:AAGwGAU3x02oxU1d_zm2aYz9o-SMFcX6vZg';
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Мади', callback_data: 'madi' }],
                [{ text: 'Ескендир', callback_data: 'eskendir' }]
            ]
        }
    };

    bot.sendMessage(chatId, 'Выберите человека:', options);
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    let response = '';

    if (query.data === 'madi') {
        response = 'Мади – 18 лет, любит играть на гитаре, играть в волейбол. Студент первого курса ЕНУ факультета ФИТ';
    } else if (query.data === 'eskendir') {
        response = 'Ескендир – 18 лет, любит петь играть на гитаре, играть в баскетбол. Учиться на 3 курсе. Есть машина и деньги))))';
    }

    bot.sendMessage(chatId, response);
    bot.answerCallbackQuery(query.id);
});
