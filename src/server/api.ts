
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false 
});

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.chat.completions.create({
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
    });

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
