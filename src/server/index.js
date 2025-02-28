
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../../')));

// API routes
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

// Catch-all route to serve the front-end for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
