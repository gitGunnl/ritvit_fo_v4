
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false,
  timeout: 10000, // 10 second timeout
  maxRetries: 3    // Retry failed requests up to 3 times
});

const MAX_RETRIES = 3;
const TIMEOUT = 10000;

async function withTimeout(promise: Promise<any>, ms: number) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timed out')), ms);
  });
  return Promise.race([promise, timeout]);
}

async function makeOpenAIRequest(messages: any[]) {
  let lastError = null;
  
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      return await withTimeout(
        openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant for a course about ChatGPT. Answer questions about the course content, pricing, and schedule. Be concise and friendly.'
            },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 150
        }),
        TIMEOUT
      );
    } catch (error: any) {
      lastError = error;
      if (error.message === 'Request timed out' || attempt === MAX_RETRIES - 1) {
        throw error;
      }
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
  throw lastError;
}

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await makeOpenAIRequest(messages);
    
    res.json({ message: completion.choices[0].message.content });
  } catch (error) {
    // Log full error details only in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('OpenAI API Error:', error);
    } else {
      // Log minimal info in production
      console.error('OpenAI API Error occurred');
    }
    
    // Send generic error to client in production
    res.status(500).json({ 
      error: process.env.NODE_ENV === 'production' 
        ? 'An error occurred. Please try again later.'
        : `Failed to get AI response: ${error?.message || 'Unknown error'}`
    });
  }
});

export default router;
