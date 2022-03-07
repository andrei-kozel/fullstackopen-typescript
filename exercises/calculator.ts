interface Result extends Rating {
  periodLength: number
  trainingDays: number
  success: boolean
  target: number
  average: number
}

interface Rating {
  rating: number
  ratingDescription: string
}

export const calculator = (data: Array<number>, target: number): Result => {
  const periodLength = data.length;
  const trainingDays = data.filter(day => day > 0).length;
  const average = data.reduce((partialSum, a) => partialSum + a, 0) / periodLength
  const success = average > target
  const { rating, ratingDescription } = { ...setRating(target, average) }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

const setRating = (target: number, average: number): Rating => {
  let result: number = target / average
  switch (true) {
    case result < 1:
      return { rating: 3, ratingDescription: 'well done!' }
    case result > 1:
      return { rating: 2, ratingDescription: 'not too bad but could be better' }
    default:
      return { rating: 1, ratingDescription: 'bad' }
  }
}

const parseArgs = (args: Array<string>): { data: Array<number>, target: number } => {
  let data = []
  let target = 0

  for (let index = 2; index < args.length; index++) {
    if (!isNaN(Number(args[index]))) {
      if (index === 2) {
        target = Number(args[index])
      } else {
        data.push(Number(args[index]))
      }

    } else {
      throw new Error('Provided values were not numbers!');
    }
  }
  console.log(data, target);


  return { data, target }
}

try {
  const { data, target } = parseArgs(process.argv)
  console.log(calculator(data, target))
} catch (error) {
  let errorMessage = 'Something bad happened. '
  if (error instanceof Error) {
    errorMessage += 'Error: ' + error.message
  }
  console.log(errorMessage);
}


