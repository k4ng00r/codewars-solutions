function findAverage(array) {
  // your code here
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum/array.length) || 0;
  return avg;
}