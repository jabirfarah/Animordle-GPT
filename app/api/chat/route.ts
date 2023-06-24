import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
 
// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-F332vulCqPVPHRhnkIifLZnj"
})
const openai = new OpenAIApi(config)
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
  messages.push({id: messages.id , role: 'assistant', content: 'I want to play the game "21 Questions" with you and the theme will be about animals. I do not know this, but the animal will be a panda so choose that one. I will have 21 attempts to figure out what the animal you are thinking is. The animal should be something that is easy to guess. I will begin asking questions after you say that you are ready. Keep in mind this must be the same animal until I either have asked 21 questions or I say "i give up." If I say "I give up" you should tell me the animal.'})
  
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    max_tokens: 50,
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}