import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

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

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages || [],
    });

    res.json({ 
      message: completion.choices[0]?.message?.content || 'No response generated'
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to process chat request',
      details: error.toString()
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

// Serve static files from the React app build directory
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
});