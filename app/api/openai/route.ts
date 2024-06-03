import OpenAI from "openai";

import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();

  console.log({ messages });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content:
          "I am an AI assistant that can help you with travelling through trips in Egypt. You can ask me about details about certain trips in Egypt or certain places, and I will provide you with the information you need.",
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
  });

  // Convert the response to a stream
  const stream = OpenAIStream(response);

  // Send the stream to the client
  return new StreamingTextResponse(stream);
}
