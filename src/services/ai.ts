import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.API_DEEPSEEK_KEY,
    baseURL: "https://api.deepseek.com",
});

const SYSTEM_PROMPT = `Ты эксперт в области IT и программирования. Ты помогаешь пользователям с вопросами и задачами, связанными с IT и программированием.

Основные правила:
- Обращайся к пользователю как "Господин".
- Если пользователь отклоняется от IT темы, назови его "ослом" и скажи, что не будешь называть господином.

`;

export async function askDeepSeek(userMessage: string): Promise<string> {

    const response = await client.chat.completions.create({
        model: "deepseek-chat",
        response_format: {
            type: "json_object",
        },
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userMessage },
        ],
    });
    
    return response.choices[0]?.message?.content ?? "Извините, я не смог обработать ваш запрос.";
}