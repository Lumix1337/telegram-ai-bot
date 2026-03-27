import "dotenv/config";
import { Bot } from "grammy";
import { BotContext } from "./types/bot-types";
import { start } from "node:repl";
import { startHandler } from "./handlers/start";
import { helpHandler } from "./handlers/help";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set in .env file");
}

export const bot = new Bot<BotContext>(BOT_TOKEN);

bot.command("start", startHandler);

bot.command("help", helpHandler);