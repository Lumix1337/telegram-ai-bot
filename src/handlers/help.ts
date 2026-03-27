import { BotContext } from "../types/bot-types";

export async function helpHandler(ctx: BotContext) {
    await ctx.reply("Вот список доступных команд:\n/start - Начать работу с ботом\n/help - Показать это сообщение\n/link - Связь с автором");
}