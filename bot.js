const TelegramBot = require("node-telegram-bot-api");
// const { readDocx } = require("./readWord");
const { responsesMap } = require("./chain");
// const responsesMap = readDocx();
const express = require("express");
const fetch = require("node-fetch");
const app = express();

const token = "2056328379:AAGXBbfrIU6j42MEwGUKv6EH_qhZk8T6iI4";
const heroku_app_name = "warm-basin-16480";

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
  // bot.deleteMessage(chat_id, message_id);
  // console.log(`got ${data}`);
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
