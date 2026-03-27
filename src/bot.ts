import "dotenv/config";
import { Bot } from "grammy";
import { BotContext } from "./types/bot-types";
import { start } from "node:repl";
import { startHandler } from "./handlers/start";
import { helpHandler } from "./handlers/help";
import { linkHandler } from "./handlers/link";
import { askAI } from "./services/ai";
import { Hears } from "./consts/hears";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set in .env file");
}

export const bot = new Bot<BotContext>(BOT_TOKEN);

bot.command("start", startHandler);
bot.command("help", helpHandler);
bot.command("link", linkHandler);

bot.hears(Hears.AI_HELPER);
bot.hears(Hears.TEST_GENERATOR);
bot.hears(Hears.HELP, helpHandler);

bot.on("message:text", async (ctx) => {
    try {
        // Эффект "печатает...", чтобы юзер видел активность
        await ctx.replyWithChatAction("typing");

        const userText = ctx.message.text;
        
        // Вызываем функцию из ai.ts
        const aiResponse = await askAI(userText);

        // Отправляем ответ Господину
        await ctx.reply(aiResponse);
    } catch (error) {
        console.error("Ошибка в боте:", error);
        await ctx.reply("Простите, Гусь, мои системы дали сбой.");
    }
});