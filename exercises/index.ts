import express from 'express';
import { calculateBmi } from './bmi';
import { calculator } from './calculator';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight) {
    res.status(400);
    res.json({ error: 'malformatted parameters' });
  } else {
    const bmi: string = calculateBmi(height, weight);
    res.json({ height, weight, bmi });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(daily_exercises, target);
  try {
    if (!daily_exercises || !target) {
      res.send(400);
      res.json({ error: 'parameters missing' });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.send(error);
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});