function sum (numbers) {
  const initialValue = 0;
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
}