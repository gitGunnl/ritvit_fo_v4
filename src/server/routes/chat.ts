
import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OpenAI API key missing - please set it in Replit Secrets');
      return res.status(500).json({ 
        error: 'API configuration error',
        details: 'OpenAI API key not configured' 
      });
    }
    
    const openai = new OpenAI({
      apiKey: apiKey,
    });
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
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
