// kiddo always says "x years old" where x is a single digit at the start (0–9) ( ͡° ͜ʖ ͡°)
// so just grab the first character and turn it into a number
// parseInt on one char is fine given the spec; no need to juggle regexes
// you could also do Number(inputString[0]) or +inputString[0], but we’re not rewiring today
// Poznań drizzle on the window, Melbourne sun in my head; tiny maths, tiny victory
// Żabka’s closed again, k***a, so we’re parsing ages instead of buying snacks ლ(ಠ益ಠლ)

function getAge(inputString){
  return parseInt(inputString[0]); // pluck first char and parse to int
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r