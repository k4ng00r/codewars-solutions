// distanceBetweenPoints: "how far is chaos point B from chaos point A?" ( ͡° ͜ʖ ͡°)
// basic geometry, but we pretend it's advanced wizardry so we feel smart
function distanceBetweenPoints(a, b) {
  // a.x, a.y → first point, maybe you, half asleep in Poznań
  // b.x, b.y → second point, maybe you daydreaming on a beach in Melbourne
  // (b.x - a.x) ** 2 → horizontal regret squared
  // (b.y - a.y) ** 2 → vertical life choices squared
  // sum of squares, then square root -> old faithful: Pythagoras
  // yes, we could use Math.hypot, but this is "manual labour" kata, mate
  return ((b.x - a.x) ** 2 + (b.y - a.y) ** 2) ** (1/2)
  // (1/2) power is the square root in a fancy jacket
  // result: straight-line distance, no detours, unlike your life path so far (╯°□°）╯︵ ┻━┻
}