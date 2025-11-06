// aisle ninja math: count the poor souls strictly behind you, in your column or to the left ( ͡° ͜ʖ ͡°)
// coordinate system weirdness? rightmost column is 1, and indices grow as you move LEFT. Fine.
// columns you’ll block: from your col through the far left => (nCols - col + 1)
// rows you’ll block: strictly behind you => (nRows - row)
// multiply the rectangles of regret and pray no one throws popcorn
// example sanity: (16, 11, 5, 3) => (16 - 5 + 1) * (11 - 3) = 12 * 8 = 96
// Poznań drizzle taps the roof, Melbourne sun heckles from memory; geometry still works. f*** it, ship it.

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}