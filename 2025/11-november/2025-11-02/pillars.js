// roadside geometry with a hangover: spacing stays the same, pillar width stays the same ( ͡° ͜ʖ ͡°)
// units: dist is in METERS, width is in CENTIMETERS; the answer must be CENTIMETERS
// exclude the first and last pillar widths; only the middle ones count
function pillars(numPill, dist, width) {
  if (numPill < 2)
    return 0; // one pillar = nothing between = 0 cm, even the boss’s budget OCR gets that
  else
    // gaps: (numPill - 1) * dist meters, convert to cm with * 100
    // middle pillars: (numPill - 2) * width centimeters (first/last not counted)
    return (numPill - 2) * width + (numPill - 1) * dist * 100;
}
// Poznań drizzle taps the window, Melbourne sun plays in my head; math does the legwork.
// Żabka zamknięta znowu, k***a, więc liczę słupki zamiast kupić chipsy ლ(ಠ益ಠლ)

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r