// netlify/functions/nl2humio.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Expects POST { "query": "5xx errors last hour by region" }
 * Returns { "humioQL": "..." }
 */
export async function handler(event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
    const { query } = JSON.parse(event.body || "{}");
    if (!query) {
      return { statusCode: 400, body: "Missing `query` in request body" };
    }

    // 1. Build prompt
    const messages = [
      {
        role: "system",
        content: "You are an expert SRE. Translate the following plain-English request into a Humio query.",
      },
      { role: "user", content: `Request: "${query}"` },
    ];

    // 2. Call OpenAI
    const resp = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      temperature: 0,
      messages,
    });

    const humioQL = resp.data.choices[0].message.content.trim();
    return {
      statusCode: 200,
      body: JSON.stringify({ humioQL }),
    };
  } catch (err) {
    console.error("nl2humio error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
