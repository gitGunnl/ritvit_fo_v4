
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    // Get API key from environment variables
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
    
    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: apiKey,
    });
    
    // Ensure messages are properly formatted
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content || ''
    }));
    
    // Add a system message if none exists
    if (!formattedMessages.some(msg => msg.role === 'system')) {
      formattedMessages.unshift({
        role: 'system',
        content: 'You are a helpful assistant that provides information about AI courses and services.'
      });
    }
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: formattedMessages,
    });

    res.json({ 
      message: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to process chat request' 
    });
  }
});

export default router;
