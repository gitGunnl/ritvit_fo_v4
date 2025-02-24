import express from 'express';
import cors from 'cors';
import api from './api';
import chatRouter from './routes/chat';

// Verify OpenAI API key is set
if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY not found in Secrets');
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use('/api', api);
app.use('/api/chat', chatRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});