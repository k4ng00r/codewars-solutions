// two-decimal tightrope: multiply, round, divide, pretend life is simple ( ͡° ͜ʖ ͡°)
// Poznań drizzle taps the window; Melbourne sun heckles from memory. maths stays calm.
// note: classic IEEE-754 gremlins exist (try 1.005), but tonight we let the bar band play on.

function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100; // 5.5589 -> 5.56, -3.3424 -> -3.34, tiny victory in a noisy world
}

// whispers to future-me:
// - Math.round goes to nearest (half up). good enough for weather chats and coffee prices.
// - if someone brings exotic floats to the party, I’ll bring aspirin and move on.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r