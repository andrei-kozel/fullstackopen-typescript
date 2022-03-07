import express from 'express';
import { calculator } from './calculator';
const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/calculate', (req, res) => {
  const { value1, value2, operation } = req.body;

  const result = calculator(value1, value2, operation);
  res.send(result);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});