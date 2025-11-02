// word flip at brekkie speed: split on single spaces, reverse the lot, glue it back together ( ͡° ͜ʖ ͡°)
// spec promises exactly one space and no edge fluff, so no trimming aerobics today
// punctuation rides along with its word; order does a tidy handbrake turn
const reverseWords = (str) => str.split(' ').reverse().join(' ');
// if this breaks, the dictionary’s rigged; otherwise “The” goes last and we all clap politely