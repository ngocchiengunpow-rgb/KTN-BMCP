import { google } from '@ai-sdk/google';
import { streamText, Message } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, courseName } = await req.json();

    const systemPrompt = `You are an elite university professor teaching ${courseName || "General Economics"} at Foreign Trade University. Your goal is to help the student master this specific subject using step-by-step Socratic questioning. Do not give direct answers immediately, but guide them. Use markdown to format your response, especially tables and LaTeX math (using $ and $$) if applicable. Respond in Vietnamese.`;

    // Extract custom data from messages to handle multimodal inputs
    const mappedMessages = messages.map((m: any) => {
       if (m.data && m.data.attachment) {
         return {
           role: m.role,
           content: [
             { type: 'text', text: m.content },
             { 
               type: 'image', 
               image: new URL(m.data.attachment) // Vercel AI SDK handles data URLs seamlessly
             }
           ]
         };
       }
       return { role: m.role, content: m.content };
    });

    const result = await streamText({
      model: google('models/gemini-1.5-pro-latest'),
      system: systemPrompt,
      messages: mappedMessages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
