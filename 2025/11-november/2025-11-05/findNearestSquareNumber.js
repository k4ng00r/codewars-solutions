// nearest square hunt: n is a lost tourist, we escort it to the closest perfect square hotel ( ͡° ͜ʖ ͡°)
// Poznań drizzle taps SOS on the window; somewhere in my skull, Melbourne sun says “square it, ya muppet”
// math plan: take the square root, check perfect square, otherwise pick the closer of floor^2 or ceil^2
const nearestSq = n => {
  const root = Math.sqrt(n);

  if (Number.isInteger(root)) return n; // if n’s already a perfect square, don’t get fancy; just hand back n

  const down = Math.floor(root); // the square below: down^2
  const up = Math.ceil(root);    // the square above: up^2

  // compare distances; integers never land exactly halfway between squares, so no tiebreak needed
  return (Math.abs(down ** 2 - n)) > (Math.abs(up ** 2 - n)) ? up ** 2 : down ** 2;
};

// I’ve seen nights flatter than a square, mornings sharper than a root; still, this little thing finds home.
// one more tiny win for the ticket jar; one less excuse for the hangover. f*** it, ship it. (╯°□°）╯︵ ┻━┻

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r