// Night math in Poznań: break the sentence into little bar tabs, write the price on each one,
// then hand them back as a tidy list. No drama, just split and stroll. ( ͡° ͜ʖ ͡°)
// Street check: "apple ban" → ["apple 5","ban 3"]; "you will win" → ["you 3","will 4","win 3"].
// If only conversations came with lengths upfront; I’d save breath and bus fare.

const addLength = str => str.split(' ').map(word => `${word} ${word.length}`);

// Minimal hangover guarantee: one split, one map, zero excuses. Coffee now.
//
// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r