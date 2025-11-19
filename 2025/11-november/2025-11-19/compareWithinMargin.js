// closeCompare: "are we far apart, kind of close, or basically on top of each other?" ( ͡° ͜ʖ ͡°)
// useful for numbers, not relationships, sadly
function closeCompare(a, b, margin){
  // if margin is missing, treat it as 0
  // so (margin || 0) basically means: "no excuses, be exact"
  // Math.abs(a - b) = how far apart they are on the number line
  if (Math.abs(a - b) <= (margin || 0)) return 0;
  // if we get here, they're NOT within the margin
  // a < b → a is lower, send -1 like a disappointed progress bar
  if (a < b) return -1;
  // otherwise a > b, so we send 1
  // classic: a flexes slightly higher than b, acting like it's special
  return 1;
  // flashback: comparing bank balance to ticket price to Melbourne
  // result: always -1, emotionally and numerically (╯°□°）╯︵ ┻━┻
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r