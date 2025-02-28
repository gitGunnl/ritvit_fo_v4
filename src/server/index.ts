
import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import chatRouter from './routes/chat';

// Load environment variables
dotenv.config();

// Log server startup info (without sensitive data)
console.log('Server starting...');
console.log('Environment:', process.env.NODE_ENV);
console.log('API Keys configured:', process.env.OPENAI_API_KEY ? 'Yes' : 'No');
console.log('Assistant ID configured:', process.env.OPENAI_ASSISTANT_ID ? 'Yes' : 'No');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// API routes - make sure these are defined before static files
app.use('/chat', chatRouter); // Route without /api prefix
app.use('/api/chat', chatRouter); // Keep original route for backward compatibility

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../../dist');
  app.use(express.static(distPath));
  
  app.get('*', (req, res, next) => {
    // Don't handle API routes with this catch-all
    if (req.path.startsWith('/api/')) {
      return next();
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
  console.log(`Chat API endpoint: http://0.0.0.0:${port}/api/chat`);
});
