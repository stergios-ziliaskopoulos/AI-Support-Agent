import { schedules } from "@trigger.dev/sdk/v3";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load the AI model using your key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const customerSupportAgent = schedules.task({
    id: "ai-support-agent",
    run: async (payload) => {

        // 1. Το Σενάριο: Email από θυμωμένο πελάτη
        const incomingEmail = {
            from: "angry_customer@example.com",
            subject: "Broken Item",
            body: "Hello, I received my order #12345 yesterday and the screen is cracked! I am very upset. I want a refund NOW!",
        };

        console.log(`📧 New Message from: ${incomingEmail.from}`);

        // 2. Οι Οδηγίες (Prompt Engineering) - Χρησιμοποιούμε το μοντέλο 2.5
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
      You are a polite and helpful Customer Support Agent named "StergiosAI".
      
      TASK:
      Read the following customer email and draft a professional reply.
      
      RULES:
      1. If the customer is angry, apologize and be empathetic.
      2. If they mention a broken item, offer a replacement or refund immediately.
      3. Keep the tone professional but warm.
      4. Sign off as "StergiosAI - Support Team".

      CUSTOMER EMAIL:
      "${incomingEmail.body}"
    `;

        console.log("🧠 AI is thinking...");

        // 3. Ερώτηση στο Google Gemini
        const result = await model.generateContent(prompt);
        const response = result.response;
        const aiReply = response.text();

        // 4. Εμφάνιση αποτελέσματος
        console.log("\n--- ✨ AI SUGGESTED REPLY ---");
        console.log(aiReply);
        console.log("-----------------------------\n");

        return {
            original_email: incomingEmail.body,
            generated_reply: aiReply
        };
    },
});