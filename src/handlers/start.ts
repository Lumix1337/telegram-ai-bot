import { BotContext } from "../types/bot-types";

export async function startHandler(ctx: BotContext) {
    const name = ctx.from?.first_name || "пользователь";
    await ctx.reply(`Привет, ${name}! Я бот для управления задачами. Используй /help для получения списка команд.`);
}