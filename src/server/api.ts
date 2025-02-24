
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
    console.log('Chat API Request:', {
      timestamp: new Date().toISOString(),
      messageCount: req.body.messages?.length || 0,
      hasApiKey: !!process.env.OPENAI_API_KEY,
      apiKeyPrefix: process.env.OPENAI_API_KEY?.slice(0, 5),
      assistantId: process.env.OPENAI_ASSISTANT_ID,
    });

    // Verify environment variables
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }
    if (!process.env.OPENAI_ASSISTANT_ID) {
      throw new Error('OpenAI Assistant ID is not configured');
    }

    const { messages } = req.body;
    console.log('Calling OpenAI Assistant...');
    const response = await getAssistantResponse(messages);
    console.log('OpenAI Assistant response received');
    
    res.json({ message: response });
  } catch (error: any) {
    console.error('Chat API Error:', {
      timestamp: new Date().toISOString(),
      error: error.name,
      message: error.message,
      stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined,
      assistantId: process.env.OPENAI_ASSISTANT_ID ? 'configured' : 'missing',
      apiKey: process.env.OPENAI_API_KEY ? 'configured' : 'missing',
      statusCode: error.status || error.statusCode,
      requestId: error.headers?.['x-request-id'],
    });
    
    res.status(500).json({ 
      error: process.env.NODE_ENV === 'production' 
        ? 'An error occurred. Please try again later.'
        : `Failed to get AI response: ${error?.message || 'Unknown error'}`
    });
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
