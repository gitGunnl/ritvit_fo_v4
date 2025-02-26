
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    // Check if the API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not configured. Set it in the Secrets tool.");
      return res.status(500).json({
        error: 'API configuration error',
        details: 'OpenAI API key not configured'
      });
    }

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'Invalid request',
        details: 'Messages array is required and cannot be empty'
      });
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Check if we should use Assistants API
    const assistantId = process.env.OPENAI_ASSISTANT_ID;
    
    if (assistantId) {
      // Using Assistants API
      console.log("Using Assistants API with ID:", assistantId);
      
      try {
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
        
        // Poll for completion (with timeout)
        const startTime = Date.now();
        const TIMEOUT_MS = 30000; // 30 seconds timeout
        
        let runStatus = await openai.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );
        
        while (
          runStatus.status !== 'completed' && 
          runStatus.status !== 'failed' &&
          Date.now() - startTime < TIMEOUT_MS
        ) {
          // Wait between polls
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Get updated status
          runStatus = await openai.beta.threads.runs.retrieve(
            thread.id,
            run.id
          );
        }
        
        if (runStatus.status === 'failed') {
          throw new Error(`Assistant run failed: ${runStatus.last_error?.message || 'Unknown error'}`);
        }
        
        if (Date.now() - startTime >= TIMEOUT_MS) {
          throw new Error('Assistant run timed out');
        }
        
        // Get the messages
        const threadMessages = await openai.beta.threads.messages.list(
          thread.id
        );
        
        // Get the last assistant message
        const assistantMessages = threadMessages.data.filter(msg => msg.role === 'assistant');
        
        if (assistantMessages.length === 0) {
          return res.json({ message: 'No response generated from the assistant' });
        }
        
        const lastMessage = assistantMessages[0];
        let messageContent = 'No text content received';
        
        if (lastMessage.content && lastMessage.content.length > 0) {
          const contentItem = lastMessage.content[0];
          if (contentItem.type === 'text') {
            messageContent = contentItem.text.value;
          }
        }
        
        return res.json({ message: messageContent });
        
      } catch (assistantError) {
        console.error("Assistants API error:", assistantError);
        throw new Error(`Assistants API error: ${assistantError.message}`);
      }
    } else {
      // Using regular Chat Completions API
      console.log("Using regular Chat Completions API");
      
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });
      
      return res.json({ 
        message: completion.choices[0]?.message?.content || 'No response generated'
      });
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ 
      error: 'Chat processing failed', 
      details: error.message || 'Unknown error'
    });
  }
});

export default router;
