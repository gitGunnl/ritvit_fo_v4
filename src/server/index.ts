import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import api from './api';
import chatRouter from './routes/chat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? true 
    : ['http://localhost:5173', 'http://localhost:3000', 'https://*.replit.dev'],
  credentials: true
}));
app.use(express.json());

// API routes
app.use('/api', api);
app.use('/api/chat', chatRouter);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../../dist')));

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});