// arrowFunc: tiny decoder ring for turning numbers into actual text ( ͡° ͜ʖ ͡°)
// you feed it char codes, it spits out a string, like magic but with more brackets
const arrowFunc = function(arr) {
  // arr = list of numbers pretending to be useless
  // map walks over each one and gives it a proper identity card as a character
  return arr.map(el => String.fromCharCode(el)).join('');
  // String.fromCharCode(el) → "congrats mate, you're a letter now"
  // join('') → no spaces, no breaks, just one continuous stream of whatever you encoded
  // perfect for secret messages or reminding yourself you once knew ASCII tables
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r