function bmi(weight, height) {
  const bodyMassIndex = weight / height ** 2;
  
  if (bodyMassIndex <= 18.5) return 'Underweight';
  else if (bodyMassIndex <= 25.0) return 'Normal';
  else if (bodyMassIndex <= 30.0) return 'Overweight';
  else if (bodyMassIndex > 30) return 'Obese';
}