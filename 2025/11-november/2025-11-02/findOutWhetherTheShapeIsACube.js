// cube check: if both numbers behave and volume equals side^3, it's cube o'clock ( ͡° ͜ʖ ͡°)
// invalid inputs (<= 0) get punted to false — no sympathy for zombie dimensions
// Poznań drizzle on the window, Melbourne sun in my head, maths in between
const cubeChecker = (volume, side) => volume <= 0 || side <=0 ? false : volume === side ** 3;
// JS note: side is guaranteed integer per spec; if volume matches side**3, we’re golden
// equal sides -> true; everything else -> false, like my bank balance after rent
// Żabka closed again, k***a, so I’m verifying cubes instead of buying snacks ლ(ಠ益ಠლ)

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r