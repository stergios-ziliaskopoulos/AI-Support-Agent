# 🤖 AI Customer Support Agent

An intelligent background worker that automates customer support responses using **Google Gemini 2.5 AI**.

## 💼 Business Value & ROI

### The Problem
Customer support teams are overwhelmed with repetitive queries, leading to **slow response times** and **high operational costs**. As ticket volume grows, hiring more agents becomes unsustainable.

### The Solution
An AI-powered agent that **handles tier-1 support queries autonomously** — reading customer messages, analyzing sentiment, and drafting professional responses in seconds. Only complex or sensitive cases are escalated to human agents, letting your team focus on high-impact work.

### ROI
- **40-60% reduction** in support ticket volume handled by humans
- **24/7 coverage** without additional staffing costs
- Faster response times leading to higher customer satisfaction (CSAT)

### Target Users
- **Customer Success Managers** looking to scale support without scaling headcount
- **Operations Managers** seeking to reduce cost-per-ticket
- **SaaS Companies** that need always-on support for a global customer base

---

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