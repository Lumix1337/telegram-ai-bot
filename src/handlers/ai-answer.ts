import { BotContext } from "../types/bot-types";

export async function aiHandler(ctx: BotContext) {
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
};
