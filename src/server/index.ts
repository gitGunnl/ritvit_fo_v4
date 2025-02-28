
import express from 'express';
import cors from 'cors';
import path from 'path';
import chatRouter from './routes/chat';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

// API routes
app.use('/chat', chatRouter);

// In production, serve the static files from the dist directory
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../../dist');
  app.use(express.static(distPath));
  
  app.get('*', (req, res, next) => {
    // Don't handle API routes with this catch-all
    if (req.path.startsWith('/chat')) {
      return next();
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
