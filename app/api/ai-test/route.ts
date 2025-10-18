import { xai, createXai } from "@ai-sdk/xai";
import { streamText } from "ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Check if API key is available
    if (!process.env.XAI_API_KEY) {
      return Response.json({ error: "XAI_API_KEY not configured" }, { status: 500 });
    }

    // Create xAI client with API key
    const client = createXai({
      apiKey: process.env.XAI_API_KEY!,
    });

    const result = streamText({
      model: client("grok-2-1212"),
      prompt: prompt,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("AI API Error:", error);
    return Response.json(
      { error: "Failed to process AI request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    message: "AI SDK Test API is running",
    model: "grok-2-1212",
    status: "ready"
  });
}
