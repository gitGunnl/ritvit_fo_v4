
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    // If we're using the assistants API
    const assistantId = process.env.OPENAI_ASSISTANT_ID;
    
    if (assistantId) {
      // Create a thread
      const thread = await openai.beta.threads.create();
      
      // Add messages to the thread
      for (const msg of messages) {
        if (msg.role === 'user') {
          await openai.beta.threads.messages.create(
            thread.id,
            { role: 'user', content: msg.content }
          );
        }
      }
      
      // Run the assistant
      const run = await openai.beta.threads.runs.create(
        thread.id,
        { assistant_id: assistantId }
      );
      
      // Check the run status
      let runStatus = await openai.beta.threads.runs.retrieve(
        thread.id,
        run.id
      );
      
      // Wait until the run is completed
      while (runStatus.status !== 'completed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await openai.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );
        
        if (runStatus.status === 'failed') {
          throw new Error('Assistant run failed: ' + runStatus.last_error?.message);
        }
      }
      
      // Get the messages
      const threadMessages = await openai.beta.threads.messages.list(
        thread.id
      );
      
      // Get the last assistant message
      const lastMessage = threadMessages.data
        .filter(msg => msg.role === 'assistant')
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
      
      if (lastMessage && lastMessage.content && lastMessage.content.length > 0) {
        const messageContent = lastMessage.content[0].type === 'text' 
          ? lastMessage.content[0].text.value 
          : 'Received a non-text response from the assistant';
          
        res.json({ message: messageContent });
      } else {
        res.json({ message: 'No response generated from the assistant' });
      }
    } else {
      // Regular chat completion
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages || [],
      });

      res.json({ 
        message: completion.choices[0]?.message?.content || 'No response generated'
      });
    }
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      error: 'Error processing chat request',
      details: error.message || 'Unknown error'
    });
  }
});

export default router;
