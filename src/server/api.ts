
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false,
});

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID;

async function getAssistantResponse(messages: any[]) {
  try {
    // Create a thread
    const thread = await openai.beta.threads.create();
    
    // Add the latest message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: messages[messages.length - 1].content
    });

    // Run the assistant
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: ASSISTANT_ID!
    });

    // Poll for completion
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== 'completed') {
      if (runStatus.status === 'failed' || runStatus.status === 'cancelled') {
        throw new Error(`Run ${runStatus.status}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    // Get messages
    const messages_list = await openai.beta.threads.messages.list(thread.id);
    const lastMessage = messages_list.data[0];

    if (!lastMessage || !lastMessage.content[0]) {
      throw new Error('No response received');
    }

    return lastMessage.content[0].text.value;
  } catch (error) {
    throw error;
  }
}

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await getAssistantResponse(messages);
    
    res.json({ message: response });
  } catch (error: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('OpenAI API Error:', error);
    } else {
      console.error('OpenAI API Error occurred');
    }
    
    res.status(500).json({ 
      error: process.env.NODE_ENV === 'production' 
        ? 'An error occurred. Please try again later.'
        : `Failed to get AI response: ${error?.message || 'Unknown error'}`
    });
  }
});

export default router;



router.post('/signup', async (req, res) => {
  try {
    const { email } = req.body;
    
    const formData = new FormData();
    formData.append("entry.263197538", email);
    formData.append("entry.240567695", "Course signup");
    
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
    console.error('Signup error:', error);
    res.status(500).json({ 
      error: 'Failed to save email'
    });
  }
});

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
