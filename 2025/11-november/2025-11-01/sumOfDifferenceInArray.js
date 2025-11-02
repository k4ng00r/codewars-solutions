// sort-and-subtract theatre, but the plot twist is it collapses to max - min ( ͡° ͜ʖ ͡°)
// if arr has < 2 items, the show’s cancelled; otherwise it’s just the end points doing all the work
const sumOfDifferences = arr => 
  arr.length < 2 
    ? 0                               // nothing to sum, no tears, no refunds
    : Math.max(...arr) - Math.min(...arr); // telescoping like a budget camping chair at Malta in Poznań
// whisper: sorting is optional, the middle bits nuke each other. maths said so.
// note: if someone throws you a comically large array, ditch the spread to avoid a runtime tantrum

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r