// uniTotal: add up the soul weight of every character in the string ( ͡° ͜ʖ ͡°)
// "a" -> 97, "aaa" -> 97 + 97 + 97 = 291
// basically: emotional damage calculator but for ASCII
const uniTotal = string => 
  // split('') breaks the string into individual gremlins (single characters)
  string
    .split('')
    // reduce walks through them, keeps a running total in `acc`
    // curr.charCodeAt(0) -> "oi mate, what's your code in the ASCII underworld?"
    .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
// initial value 0 = starting from emotional rock bottom, as usual
// result: a single number, sum of all char codes
// like summing every tiny decision that led from sunny Australia to coding in cloudy Poznań 💀