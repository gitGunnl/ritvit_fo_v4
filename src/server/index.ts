
import express from 'express';
import cors from 'cors';
import path from 'path';
import chatRouter from './routes/chat';

const app = express();
const port = process.env.PORT || 3000;

// Add middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// API routes - make sure these come before the static file handling
app.use('/chat', chatRouter);

// Serve static files from the dist directory
const distPath = path.join(__dirname, '../../dist');
app.use(express.static(distPath));

// For any other routes, serve the index.html (client-side routing)
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/chat')) {
    return;
  }
  
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`OpenAI API Key configured: ${process.env.OPENAI_API_KEY ? 'Yes' : 'No'}`);
});
