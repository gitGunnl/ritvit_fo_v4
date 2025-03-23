import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import * as chatRouter from './routes/chat';
import apiRouter from './routes/api.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Diagnostic logging
console.log('Server starting...');

const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, '..', '..', 'dist');

console.log(`Static path: ${staticPath}`);

// Serve static files
app.use(express.static(staticPath));

// Mount routes
app.use('/chat', chatRouter);
app.use('/api', apiRouter);

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});