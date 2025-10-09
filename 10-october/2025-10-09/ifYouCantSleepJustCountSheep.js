const countSheep = num => {
  let resultString = ''
  
  for (let i=1; i<=num; i++) {
    resultString += `${i} sheep...`;
  }
  
  return resultString;
}