// midnight code check: “should return an object” — mate, it already does ( ͡° ͜ʖ ͡°)
// the real trap is when someone drops the brace on the next line after `return`
// then ASI slaps in a semicolon and you get `undefined`. seen it at 3 a.m., coffee cold, soul colder.
// Poznań drizzle on the window, Melbourne sun in the memory; sanity packed in a tiny object and shipped.
// I swear this looked smarter before the hangover; still works, so I’m happy, k***a.

function mystery() {
  var results =
    {sanity: 'Hello'};   // little jar of sanity; do not tip it over
  return results;        // keep `{` on the same line as `return` in life and in love
}

// pause. flashback. tram bell, bad decisions, good code. object returned, night forgiven. ლ(ಠ益ಠლ)

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r