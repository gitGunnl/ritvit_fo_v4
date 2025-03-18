import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import routes
import chatRouter from './routes/chat.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// API routes
app.use('/chat', chatRouter);

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

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
const staticPath = path.join(__dirname, '..', '..', 'dist');
app.use(express.static(staticPath));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port} (0.0.0.0)`);
  console.log(`Server should be accessible externally`);
  console.log(`Static files served from: ${staticPath}`);
});
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../../dist')));

// API routes can be added here
// app.get('/api/example', (req, res) => { ... });

// For any other route, serve the index.html (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
