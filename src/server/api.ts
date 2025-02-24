import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages || [],
    });

    res.json({ 
      reply: completion.data.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to process chat request', details: error.message });
  }
});

export default router;

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const formData = new FormData();
    formData.append("entry.1179687836", name);
    formData.append("entry.263197538", email);
    formData.append("entry.240567695", message);
    
    const response = await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSf8FFci-J91suIjxY2xh4GD-DQ-UfZftUNxq3dUdXkgJAjB1Q/formResponse',
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      error: 'Failed to submit form'
    });
  }
});