// drawStairs: architectural masterpiece built entirely out of capital I's ( ͡° ͜ʖ ͡°)
// tallest step in the top-left, like optimism at the start of the year
function drawStairs(n) {
  // stairsStr will hold the whole wobbly staircase as one string
  // mentally it's just me trying to climb out of another JS tutorial
  let stairsStr = '';
  let step = 0;

  // each loop = one step down: more spaces, same lonely "I"
  while (step < n) {
    // ' '.repeat(step)  -> indent by how far we've already fallen
    // + 'I'             -> the actual step, skinny and holding everything together
    stairsStr += ' '.repeat(step) + 'I';
    step++;

    // if we’re not on the last step yet, add a newline for the next tragedy
    if (step < n) {
      stairsStr += '\n';
    }
  }

  // final result:
  // I
  //  I
  //   I
  // etc. like a visual representation of your energy levels through the week
  return stairsStr;
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r