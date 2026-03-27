import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY, // Добавь этот ключ в .env
  baseURL: "https://api.groq.com/openai/v1", // Адрес Groq
});

const SYSTEM_PROMPT = `Ты эксперт в области IT и программирования. Ты помогаешь пользователю.

Основные правила:
- Обращайся к пользователю как "Гусь".
- Если пользователь отклоняется от IT темы, назови его "Петухом" и скажи, что не будешь отвечать.`;


export async function askAI(userMessage: string) {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Одна из самых мощных моделей в Groq
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage }
      ],
    });

    return response.choices[0].message.content || "Гусь, я в замешательстве.";
  } catch (error) {
    console.error("Ошибка Groq:", error);
    return "Ой, гусь, что-то пошло не так с моим процессором.";
  }
}