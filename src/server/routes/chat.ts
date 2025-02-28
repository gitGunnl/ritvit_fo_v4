
import express from 'express';
import { OpenAI } from 'openai';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;

    // Check if API key is configured in Replit Secrets
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key missing - please set it in Replit Secrets');
      return res.status(500).json({ 
        error: 'API configuration error',
        details: 'OpenAI API key not configured. Please add OPENAI_API_KEY in Replit Secrets.' 
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
    });

    res.json({ 
      message: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      error: 'Failed to process chat request',
      details: error.message || 'Unknown error' 
    });
  }
});

export default router;
