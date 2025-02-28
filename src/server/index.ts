
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const app = express();
const port = process.env.PORT || 3000;

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS setup
app.use(cors({
  origin: true,
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    console.log('Chat request received. Messages count:', messages?.length || 0);
    
    // Check if API key is available in environment
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key missing - please set OPENAI_API_KEY in Replit Secrets');
      return res.status(500).json({
        error: 'API Configuration Error',
        details: 'OpenAI API key is not configured in Replit Secrets'
      });
    }

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
    const errorDetails = process.env.NODE_ENV === 'production' 
      ? 'An error occurred processing your request' 
      : error.message || 'Unknown error';
      
    res.status(500).json({ 
      error: 'Failed to process chat request',
      details: errorDetails
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
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

// Serve static files
const staticPath = path.join(__dirname, '..', '..', 'dist');
app.use(express.static(staticPath));

// For any other route, serve the React app (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Static files served from: ${staticPath}`);
  console.log(`API key configured: ${process.env.OPENAI_API_KEY ? 'Yes' : 'No'}`);
});
