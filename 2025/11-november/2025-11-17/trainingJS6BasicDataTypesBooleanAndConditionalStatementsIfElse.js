// boolean kata: JS looking at your value and deciding "are you something or just vibes?" ( ͡° ͜ʖ ͡°)
// task says: if val behaves like false -> return "false", otherwise "true"
// ternary already does exactly that, cleaner than my life choices
const trueOrFalse = val => 
  // val ? 'true' : 'false'
  // if val is truthy (non-zero, non-empty, not null, not undefined, not NaN)
  // -> "true"
  // otherwise -> "false"
  // same logic my landlord uses to decide if my rent excuse is valid: it's always "false"
  val ? 'true' : 'false';
// flashback: first time I learned about truthy/falsy,
// spent an hour logging `!!value` for random stuff instead of actually coding (╯°□°）╯︵ ┻━┻

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r