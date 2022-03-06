type Result = string;

const calculateBmi = (height: number, weight: number): Result => {
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

console.log(calculateBmi(180, 74))