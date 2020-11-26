require('dotenv').config();

const { BOT_TOKEN } = process.env;

const Telegraf = require('telegraf');

const init = async(bot, config) => {
    bot.start(ctx => console.log(ctx.message));

    bot.start(ctx => {
        ctx.replyWithHTML(`H, <i>${ctx.message.from.first_name}</i>\nКоманда '/help' посмотреть команды\n'/top' - рост`);
    });

    bot.help(ctx => {
        ctx.reply('Помоги себе');
    });

    bot.command('top', ctx => {
        ctx.reply('dev...');
    });

    bot.hears('test', ctx => {
        ctx.reply(new Date());
    });

    return bot;
}

init(new Telegraf(BOT_TOKEN), process.env)
    .then(async(bot) => {
        await bot.launch();
        console.log(`Launched ${new Date()}`);
    });

module.exports = init;