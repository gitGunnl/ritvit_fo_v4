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
const port = process.env.PORT || 8080;

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