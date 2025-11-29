// amIWilson: check if a prime is one of those cursed "Wilson primes" ( ͡° ͜ʖ ͡°)
// formal definition is all factorial madness:
//   ((p - 1)! + 1) / (p * p) should be a whole number
// in practice: try computing 562! by hand and tell me how your brain feels after
//
// so instead of cooking the CPU with huge factorials,
// we shamelessly use the mathematical cheat sheet:
//
// as of what we mortals know,
// the only Wilson primes are: 5, 13, 563
// if someday someone finds another, this function will lie
// but by then I’ll hopefully be on a beach in Australia, not maintaining this (ง'̀-'́)ง
function amIWilson(p) {
  // includes(p) just checks if p is in the "VIP list" of known Wilson primes
  // true  -> yep, fancy special prime
  // false -> just another regular prime or random number pretending to be important
  return [5, 13, 563].includes(p);
}