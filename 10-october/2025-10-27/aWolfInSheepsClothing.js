// Great Britain brings back wolves, I bring back hangovers; fair trade, kurwa ( ͡° ͜ʖ ͡°)
// farmer POV at the front like I’m waiting for tram 10 at Most Teatralny — everything’s reversed in my skull

function warnTheSheep(queue) {
  // flip the line: I stand at the “front” which is the array’s end — Britain drives left, my brain drives nowhere
  const queueReversed = queue.reverse(); // reverse so index 0 = right in my face, like a bouncer at Pacha telling me “not tonight, kangaroo”
  // spot the furry imposter; Codewars calls it a wolf, I call it Tuesday
  const wolfIndex = queueReversed.findIndex(el => el === 'wolf'); // strobe-light logic but with sheep

  // if the wolf is kissing distance, preach pacifism before breakfast
  if (wolfIndex === 0)
    return 'Pls go away and stop eating my sheep'; // tests are church; we confess politely, even to carnivores

  // otherwise warn the poor fluff ahead of the wolf — arithmetic of doom, position == wolfIndex post-reversal
  return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`; // another day, another sermon; ticket to Melbourne still unpaid
}
// pause. flashback: Blue Note late set, double espresso, I promised not to code drunk — broke one promise, kept the tests
//
// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r