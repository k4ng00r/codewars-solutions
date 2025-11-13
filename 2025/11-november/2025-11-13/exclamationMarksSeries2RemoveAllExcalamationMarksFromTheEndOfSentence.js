// end-of-line exorcism: shoo away the trailing shrieks and leave the sentence in peace ( ͡° ͜ʖ ͡°)
// regex priesthood: /!+$/ grabs one-or-more bangs at the very end, replaces with nothing
// Poznań rain on the sill, Sydney sun in my head; silence the drama, keep the words
// works for "Hi!!!" -> "Hi", but "!Hi!" stays "!Hi" because beginnings can still scream a bit, k***a.

const remove = string => string.replace(/!+$/, "");

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r