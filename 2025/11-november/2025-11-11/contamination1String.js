// biohazard romance: feed me a text and a single char, I’ll repaint the whole thing in one mood ( ͡° ͜ʖ ͡°)
// empty text or empty char? nothing happens, which is merciful for once.
// Poznań drizzle outside, Sydney sun in my head; mutation proceeds, clipboard grins.

const contamination = (text, char) => (text === '' || char === '') ? '' : text.split('').map(el => el = char).join('');

// example:
// contamination("abc", "z") -> "zzz"
// some nights you rewrite everything into one letter. some mornings you regret it. k***a.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r