# 🤖 AI Customer Support Agent

An intelligent background worker that automates customer support responses using **Google Gemini 2.5 AI**.

## 🧠 What it does
This agent acts as a first-line support representative. It:
1.  **Reads** incoming customer emails (simulated).
2.  **Analyzes** the sentiment (detects if the customer is angry or happy).
3.  **Drafts** a professional, empathetic response automatically.
4.  **Adapts** its tone based on the context (e.g., offering refunds for broken items).

## ⚡ Tech Stack
* **AI Model:** Google Gemini 2.5 Flash
* **Framework:** Trigger.dev (Serverless Background Jobs)
* **Language:** TypeScript
* **Integration:** Google Generative AI SDK

## 🛠️ How it works (Under the hood)
The agent uses **Prompt Engineering** to instruct the AI on how to behave:
> "You are a polite and helpful Customer Support Agent named 'StergiosAI'. If the customer is angry, apologize and be empathetic."

## 🚀 How to run
1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Set up your `.env` file with `GEMINI_API_KEY`.
4.  Start the local server: `npx trigger.dev@latest dev`
5.  Trigger the `ai-support-agent` task.

---
*Developed by Stergios Ziliaskopoulos*