# TG-AI-Bot

![Status: In Progress](https://img.shields.io/badge/Status-In%20Progress-orange?style=for-the-badge&logo=github)

An ultra-fast intelligent Telegram bot powered by **grammY** and **Groq Cloud AI**, built with **TypeScript**. This bot leverages LPU™ (Language Processing Unit) technology for near-instant responses and features a clean modular architecture.

---

## 🚀 Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![grammY](https://img.shields.io/badge/grammY-3399FF?style=for-the-badge&logo=telegram&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-f55036?style=for-the-badge&logo=groq&logoColor=white)

---

## 🛠 Project Architecture

The project follows a modular principle for better maintainability:
* `src/bot.ts` — Bot initialization and handler registration.
* `src/handlers/` — Message processing logic (AI answers via Groq).
* `src/services/` — Groq Cloud SDK integration.
* `src/types/` — Custom context and data type definitions.

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/tg-ai-bot.git](https://github.com/your-username/tg-ai-bot.git)
   cd tg-ai-bot

2. **Install dependencies:**
   ```bash
   npm install

3. **Configure Environment Variables:**
Create a .env file in the root directory:
   ```bash
    BOT_TOKEN=your_telegram_bot_token
    GROQ_API_KEY=your_groq_api_key

4. **Run the Bot:**
   ```bash
    # Development mode
    npm run dev

    # Build and Start
    npm run build
    npm start