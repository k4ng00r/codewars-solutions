function countSheeps(sheep) {
  // TODO
  let counter = 0;
  for (let i=0; i<sheep.length; i++) {
    if (sheep[i]) counter++;
  }
  return counter;
}