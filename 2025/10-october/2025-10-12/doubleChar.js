// double vision kata: every character goes out twice, case-sensitive and proud ( ͡° ͜ʖ ͡°)
// works on letters, digits, spaces, punctuation — if it’s a char, it’s getting a twin
// Poznań drizzle on the pane, Melbourne sun in my skull; fine, we’ll map the alphabet to its evil clone
// tiny caveat: this splits by UTF-16 code units, so fancy emoji might get weird — kata inputs are usually tame
// Żabka znowu zamknięta, k***a, więc dubluję literki zamiast kupić chipsy ლ(ಠ益ಠლ)

const doubleChar = (str) => str.split('').map(s => s + s).join('');

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r