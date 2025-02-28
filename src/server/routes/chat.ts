import express from 'express';
import { OpenAI } from 'openai';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    // Log the received data (without sensitive information)
    console.log('Chat request received. Messages count:', messages?.length || 0);
    
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key missing - please set it in Replit Secrets');
      return res.status(500).json({ 
        error: 'API configuration error',
        details: 'OpenAI API key not configured. Please add it to Replit Secrets with the key: OPENAI_API_KEY' 
      });
    }

    // Validate messages array
    if (!messages || !Array.isArray(messages) || !messages.length) {
      console.error('Invalid messages format:', JSON.stringify(req.body));
      return res.status(400).json({
        error: 'Invalid request',
        details: 'Messages array is required'
      });
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Ensure messages are in the correct format for OpenAI API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Process with chat completions API
    console.log('Sending request to OpenAI...');
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: formattedMessages,
    });
    console.log('Response received from OpenAI');

    res.json({ 
      message: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    // Send more detailed error information in development
    const errorDetails = process.env.NODE_ENV === 'production' 
      ? 'An error occurred processing your request' 
      : error.message || 'Unknown error';
      
    res.status(500).json({ 
      error: 'Failed to process chat request',
      details: errorDetails
    });
  }
});

export default router;