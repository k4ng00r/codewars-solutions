function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const classSum = classPoints.reduce((acc, curr) => acc + curr, 0);
  const totalSum = classSum + yourPoints;
  const avg = totalSum/(classPoints.length + 1);
  return yourPoints > avg ? true : false;
}