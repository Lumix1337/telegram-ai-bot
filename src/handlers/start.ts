import { Hears } from "../consts/hears";
import { BotContext } from "../types/bot-types";
import { Keyboard } from "grammy"

const keyboard = new Keyboard()
    .text(Hears.AI_HELPER)
    .text(Hears.TEST_GENERATOR)
    .text(Hears.HELP)    
    .resized()
    .persistent();

export async function startHandler(ctx: BotContext) {
    const name = ctx.from?.first_name || "пользователь";
    await ctx.reply(`Привет, ${name}! Я бот для управления задачами. Используй /help для получения списка команд.`, { reply_markup: keyboard });
}