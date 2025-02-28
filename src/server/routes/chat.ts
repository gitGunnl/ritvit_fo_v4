import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages || [],
    });

    res.json({ 
      message: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to process chat request',
      details: error.toString()
    });
  }
});

export default router;