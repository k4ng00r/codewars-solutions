// street performer playing bangers, wallet already halfway out, classic trap ( ͡° ͜ʖ ͡°)
// if the conversation includes "tree fiddy", "3.50", or "three fifty"
// congrats, you're not tipping a musician, you're funding a prehistoric scammer
function isLochNessMonster(s) {
  // regex of pain:
  // - "tree fiddy"  -> drunk accent special
  // - "3.50"        -> mathematically broke
  // - "three fifty" -> polite version of the same robbery
  // no flags, no mercy, pure textual paranoia
  return /tree fiddy|3\.50|three fifty/.test(s);
  // returns true -> that’s Nessie, hide your coins
  // returns false -> probably just a human, still broke, but not 400ft tall (╯°□°）╯︵ ┻━┻
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r