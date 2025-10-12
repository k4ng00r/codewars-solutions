function sumArray(array) {
  if (!array || array.length < 3) return 0;

  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let num of array) {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return sum - min - max;
}