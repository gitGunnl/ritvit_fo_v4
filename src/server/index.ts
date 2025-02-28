
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import chatRouter from './routes/chat';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.OPENAI_API_KEY) {
  console.warn('⚠️ WARNING: OPENAI_API_KEY not found in environment variables');
  console.warn('Please set it in the Secrets tab in Replit');
} else {
  console.log('✅ OPENAI_API_KEY is configured correctly');
}

// Log deployment environment
const isProduction = process.env.NODE_ENV === 'production';
console.log(`Running in ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'} mode`);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

// API routes
app.use('/api/chat', chatRouter);

// In production mode, serve static files from the dist directory
const distPath = path.resolve(__dirname, '../../dist');
console.log(`Static files path: ${distPath}`);

app.use(express.static(distPath));

// All other GET requests not handled will return the React app
app.get('*', (req, res) => {
  console.log(`Received request for: ${req.url}`);
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Server URL: http://0.0.0.0:${port}`);
});
