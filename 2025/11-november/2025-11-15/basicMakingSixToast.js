// toast speedrun: because waiting for breakfast is for responsible adults ( ͡° ͜ʖ ͡°)
// goal: always end up exactly at 6 pieces, no matter how overcaffeinated you were
function sixToast(num) {
  // num = how many slices you *think* you tossed in
  // 6 = the sacred number, like beers on a Friday "just one more" night
  // ternary time: if you overshot (num >= 6), take some out
  // if you undershot, cram a few more in before they get cold
  return num >= 6 ? num - 6 : 6 - num;
  // result is always positive: code doesn't do drama, it just tells you how wrong you were
  // flashback: burned toast in a tiny Poznań kitchen, late JS tutorial playing, me pretending this is "the grind"
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r