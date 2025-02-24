import express from 'express';
import { OpenAI } from 'openai';

const router = express.Router();
const openai = new OpenAI();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    res.json({ message: completion.choices[0].message });
  } catch (error: any) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: process.env.NODE_ENV === 'production' 
        ? 'An error occurred' 
        : error.message 
    });
  }
});

export default router;