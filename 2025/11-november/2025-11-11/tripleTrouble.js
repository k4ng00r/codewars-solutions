// three-track mixtape: take i-th char from each string and stitch them in order ( ͡° ͜ʖ ͡°)
// inputs are same length, so no stragglers at closing time
// Poznań drizzle outside, Melbourne sun in my head; syncopated letters, small victory
const tripleTrouble = (one, two, three) => {
  let result = '';
  for (let i = 0; i < one.length; i++) {
    result += `${one[i]}${two[i]}${three[i]}`; // a-b-c, then next bar: a-b-c again
  }
  return result; // curtain down, chorus intact
}