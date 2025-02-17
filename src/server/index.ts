
import express from 'express';
import cors from 'cors';
import api from './api';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use('/api', api);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
