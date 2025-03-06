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

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

// Handle termination signals properly
const handleShutdown = () => {
  console.log('Server shutting down...');
  server.close(() => {
    console.log('Server closed successfully');
    process.exit(0);
  });

  // Force close after 5 seconds if graceful shutdown fails
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 5000);
};

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);
process.on('SIGUSR2', handleShutdown); // For Nodemon restarts