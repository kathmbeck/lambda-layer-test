import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { query } = body;
  if (!query || typeof query !== "string") {
    return { statusCode: 400, body: "Missing `query` in request body" };
  }

  const messages = [
    {
      role: "system",
      content: "You are an expert SRE. Translate the following plain-English request into a Humio query.",
    },
    { role: "user", content: `Request: "${query}"` },
  ];

  try {
    const resp = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0,
      messages,
    });
    const humioQL = resp.choices[0].message.content.trim();
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
