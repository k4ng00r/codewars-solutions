// Jack’s five ritual: every number cops a multiplier of 5^digits ( ͡° ͜ʖ ͡°)
// count digits on the absolute value; the minus sign doesn’t get a vote
// 3   -> 3 * 5^1 = 15
// 10  -> 10 * 5^2 = 250
// 200 -> 200 * 5^3 = 25000
// 0   -> “0”.length === 1, so 0 * 5^1 = 0
// wrote this at stupid o’clock, rain tapping the sill, head full of sand and bad poetry. works though, k***a.

const multiply = number => number * (5 ** Math.abs(number).toString().length);

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r