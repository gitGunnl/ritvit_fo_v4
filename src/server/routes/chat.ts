
import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ 
      reply: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

export default router;
