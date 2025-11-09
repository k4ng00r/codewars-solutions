// family summit arithmetic: youngest, oldest, then the yawning gap in between ( ͡° ͜ʖ ͡°)
// somewhere between soggy Poznań evenings and sunburnt Melbourne mornings, we still do the maths
// no drama, no genealogical feuds in code comments… alright, maybe a little

const differenceInAges = ages => {
  const oldest = Math.max(...ages);          // the ancient legend who tells the best stories
  const youngest = Math.min(...ages);        // the tiny chaos agent with sticky hands
  return [youngest, oldest, Math.abs(oldest - youngest)]; // [start, finish, distance covered by time]
};

// note from the roo: spread’s fine for kata-sized arrays; if your clan is a small nation, bring a loop
// small win in the jar, ticket dream a millimetre closer. f*** it, ship it.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r