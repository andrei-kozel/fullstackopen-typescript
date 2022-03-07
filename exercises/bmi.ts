type BmiResult = string;

interface DataValues {
  weight: number
  height: number
}

const parseArguments = (args: Array<string>): DataValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

export const calculateBmi = (height: number, weight: number): BmiResult => {
  const bmi = weight / (height * height) * 10000;

  switch (true) {
    case (bmi < 18.5):
      return 'Underweight';
    case (bmi < 25):
      return 'Normal';
    case (bmi < 30):
      return 'Overweight';
    default:
      return 'Obese';
  }
}

try {
  const { height, weight } = parseArguments(process.argv)
  console.log(calculateBmi(height, weight));
} catch (error) {
  let errorMessage = 'Something bad happened. '
  if (error instanceof Error) {
    errorMessage += 'Error: ' + error.message
    console.log(errorMessage);
  }
}


