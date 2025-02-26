
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OpenAI API key missing - please set it in Replit Secrets');
      return res.status(500).json({ 
        error: 'API configuration error',
        details: 'OpenAI API key not configured' 
      });
    }
    
    if (!messages || !Array.isArray(messages) || !messages.length) {
      return res.status(400).json({
        error: 'Invalid request',
        details: 'Messages array is required'
      });
    }
    
    const openai = new OpenAI({
      apiKey: apiKey,
    });
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content || ''
      })),
    });

    res.json({ 
      message: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      error: 'Error processing chat request',
      details: error.message || 'Unknown error'
    });
  }
});

export default router;
