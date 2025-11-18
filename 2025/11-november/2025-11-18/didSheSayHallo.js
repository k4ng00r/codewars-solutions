const greetingsObj = {
  'english': 'hello',          // classic "hello", zero mystery, 10/10 understandable
  'italian': 'ciao',           // guaranteed came with good hair and bad decisions
  'french': 'salut',           // probably smoked, probably broke your heart
  'german': 'hallo',           // may or may not have explained beer purity laws at 2am
  'spanish': 'hola',           // danced better than you, don’t lie
  'czech republic': 'ahoj',    // you half-remember this one from the third bar
  'polish': 'czesc',           // and this one you heard shouted across a tram stop
};

const validateHello = greetings => {
  // we got a message, now we scan for any of the "could be that person from last night" greetings
  for (const [key, value] of Object.entries(greetingsObj)) {
    // key = language name (we don’t actually use it, just vibes)
    // value = the greeting we’re hunting for
    // new RegExp(value, 'i') -> build a case-insensitive regex from the greeting
    // .test(greetings.toLowerCase()) -> double down on case handling like a paranoid kangaroo
    if ((new RegExp(value, 'i')).test(greetings.toLowerCase())) return true;
    // first match and we’re done: someone from the chaos roster said hi ( ͡° ͜ʖ ͡°)
  }
  // if we get here: either spam, a scam, or someone who said "sup" instead of "hola"
  return false;
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r