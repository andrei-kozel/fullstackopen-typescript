import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});