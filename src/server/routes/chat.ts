
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }
    
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);
    
    console.log('Sending request to OpenAI:', { message });
    
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.data.choices[0]?.message?.content;
    
    if (!reply) {
      throw new Error('No response generated from OpenAI');
    }

    console.log('Received response from OpenAI:', { reply });
    res.json({ reply });
    
  } catch (error: any) {
    console.error('Chat API Error:', {
      message: error.message,
      stack: error.stack,
      status: error.status || error.statusCode,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({ 
      error: process.env.NODE_ENV === 'production' 
        ? 'An error occurred while processing your request' 
        : error.message 
    });
  }
});

export default router;
