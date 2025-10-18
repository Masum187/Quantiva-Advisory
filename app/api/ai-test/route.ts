import { xai } from "@ai-sdk/xai";
import { streamText } from "ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const result = streamText({
      model: xai("grok-2-1212"),
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
