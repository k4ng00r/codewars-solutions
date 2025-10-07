function countPositivesSumNegatives(input) {
  // your code here
  let countPositive = 0;
  let sumNegative = 0;
  
  if (!input || input.length === 0) return [];
  
  for (let i=0; i<input.length; i++) {
    if (input[i] === 0) continue;
    else input[i] > 0 ? countPositive++ : sumNegative += input[i];
  }
  
  return [countPositive, sumNegative];
}