const TelegramBot = require("node-telegram-bot-api");
const { responsesMap } = require("./chain");
const express = require("express");
const fetch = require("node-fetch");
const app = express();

const token = "5023032656:AAHZmjP1oTCf0aMneXmd5aINMzaXTKxDcCc";
const heroku_app_name = "hila-pniot-bot";

const bot = new TelegramBot(token, {
  polling: true,
});
bot.on("polling_error", console.log);

bot.on("message", (msg) => {
  bot.sendMessage(
    msg.from.id,
    responsesMap["main"].text,
    responsesMap["main"].opts
  );
});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const data = callbackQuery.data;
  const opts = {
    chat_id: callbackQuery.message.chat.id,
    message_id: callbackQuery.message.message_id,
  };
  if (responsesMap[data]) {
    bot.sendMessage(
      opts.chat_id,
      responsesMap[data].text,
      responsesMap[data].opts
    );
  } else {
    bot.sendMessage(opts.chat_id, "אופס, יש בעיה");
  }

  bot.answerCallbackQuery(callbackQuery.id);
});

const PORT = process.env.PORT || 3000;

const wakeUp = () => {
  fetch(`https://${heroku_app_name}.herokuapp.com/`)
    .then(() => {
      console.log("Waking up heroku");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.listen(PORT, function () {
  console.log(`Bot is running at port ${PORT}`);
  setTimeout(() => {
    wakeUp();
  }, 1200000);
});
