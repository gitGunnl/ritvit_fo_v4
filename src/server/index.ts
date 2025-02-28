
import express from 'express';
import cors from 'cors';
import path from 'path';
import chatRouter from './routes/chat';

// Log server startup info (without sensitive data)
console.log('Server starting...');
console.log('Environment:', process.env.NODE_ENV);
console.log('API Keys configured:', process.env.OPENAI_API_KEY ? 'Yes' : 'No');
console.log('Assistant ID configured:', process.env.OPENAI_ASSISTANT_ID ? 'Yes' : 'No');

// Log important warning if API key is missing
if (!process.env.OPENAI_API_KEY) {
  console.warn('⚠️ WARNING: OPENAI_API_KEY not found in environment variables');
  console.warn('Please set it in the Secrets tab in Replit');
}

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*',  // Allow all origins for simplicity
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'], // Explicitly allow these methods
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// API routes
app.use('/api/chat', chatRouter);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../../dist');
  app.use(express.static(distPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
  console.log(`Chat API endpoint: http://0.0.0.0:${port}/api/chat`);
});
