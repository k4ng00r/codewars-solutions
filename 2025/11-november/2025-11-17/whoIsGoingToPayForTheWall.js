// Don Drumphet, champion of short attention spans and long walls ( ͡° ͜ʖ ͡°)
// job here: take a name, chop it down so even this bloke can read it
function whoIsPaying(name){
  // if the name is already 2 chars or less, no need to butcher it
  // like when the bar tab is 0, you can't split it any further, mate
  if (name.length <= 2) return [name];

  // otherwise: give them the full majestic name
  // and then the "Drumphet-friendly" version: first 2 letters and vibes
  // pause. flashback. club in Melbourne, girl told me her name,
  // I only remembered first two letters and a perfume that cost more than my laptop
  return [name, name.slice(0, 2)];
  // result: array with either [name] or [fullName, truncated]
  // HOA might still not pay for the wall, but at least the signatures are readable (╯°□°）╯︵ ┻━┻
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r