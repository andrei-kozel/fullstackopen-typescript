import express from 'express';
import { calculateBmi } from './bmi';

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  const height: number = Number(req.query.height)
  const weight: number = Number(req.query.weight)

  if (!height || !weight) {
    res.status(400);
    res.json({ error: 'malformatted parameters' })
  } else {
    const bmi: string = calculateBmi(height, weight)
    res.json({ height, weight, bmi })
  }
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})