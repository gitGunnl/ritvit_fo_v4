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

// Diagnostic logging
console.log('Server starting...');
console.log('Environment check:', {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  OPENAI_CONFIG: !!process.env.OPENAI_API_KEY && !!process.env.OPENAI_ASSISTANT_ID
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

const port = process.env.PORT || 8080;

// Serve static files from the dist directory
const staticPath = path.join(__dirname, '..', '..', 'dist');
app.use(express.static(staticPath));

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Static files served from: ${staticPath}`);
});