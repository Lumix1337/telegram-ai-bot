import { BotContext } from "../types/bot-types";

export async function linkHandler(ctx: BotContext) {
    await ctx.reply(`Связаться со мной: goose`);
}