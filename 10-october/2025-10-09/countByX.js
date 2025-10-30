// Counting steps home: first n multiples of x, like paving stones across the Warta.
// Evening plan → bassline arithmetic → dawn tram → tidy array. ( ͡° ͜ʖ ͡°)

function countBy(x, n) {
  let z = [];

  // start at 1 because the night doesn’t begin at zero, it begins when you actually move
  for (let i=1; i<=n; i++) {
    // each push is another streetlight passing: x, 2x, 3x… steady feet, steady math
    z.push(x * i);
  }
  
  // final stop: pockets full of numbers, head full of Melbourne sun
  return z;
}

// Flashback:
// Schron on Saturday: counting kicks in groups of x until sunrise,
// promising to count commits the same way on Monday.
// Little sequences, big momentum.
