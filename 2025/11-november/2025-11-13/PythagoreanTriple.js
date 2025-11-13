// three strays on a napkin: if two little squares add up to the big square, Pythagoras buys the next round ( ͡° ͜ʖ ͡°)
// pick the hypotenuse by ego (max), square it, then square the others and add — no geometry police, just vibes
// Poznań drizzle outside, Melbourne sun in my head; triangles still behave even when I don’t
// if longest === sum of the rest, it’s a triple; otherwise it’s just three numbers and a broken promise
// censored confession: this is cleaner than my conscience after Saturday. k***a.

const isPythagoreanTriple = (integers) => {
  const longest = Math.max(...integers) ** 2;                             // crown the biggest and square the crown
  const rest = integers
    .map(el => el ** 2)                                                   // square every suspect
    .filter(el => el !== longest)                                         // keep the two not wearing the crown
    .reduce((acc, curr) => acc + curr, 0);                                // stack their alibis

  return longest === rest;                                                // choir in tune = true, otherwise false
};

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r