
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Handle API endpoints for the chat functionality
app.post('/api/chat', async (req, res) => {
  try {
    console.log('Chat request received:', req.body);
    // Since we don't have API keys configured, return a mock response
    res.json({ 
      message: "I'm a mock response since there is no OpenAI API key configured. Please contact site administrator."
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

// Handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Form submission:', req.body);
    res.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      error: 'Failed to submit form'
    });
  }
});

// Serve static files from the dist directory
const distPath = path.join(__dirname, '../../dist');
app.use(express.static(distPath));

// Catch-all route to serve the front-end for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
