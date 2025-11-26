// neutralise: tiny physics engine for emotionally unstable pluses and minuses ( ͡° ͜ʖ ͡°)
// rulebook:
// + with + → still +
// - with - → still -
// + with - or - with + → "I’m tired bro" → 0
const neutralise = (s1, s2) => [...s1]                      // spread the first string into an array of single chars
  .map((curr, i) =>                                         // walk through each position, compare with the same index in s2
    curr === s2[i]                                          // if they match (+/+ or -/-) →
      ? curr                                                // keep the original sign, the vibes agree
      : 0                                                   // otherwise they cancel each other out into a big fat neutral 0
  )
  .join('');                                                // glue everything back into one string, no commas, just pure chaos output
// result looks like: "+-0", "000000", "-+00" etc.
// like watching two drunk mates argue until they either agree (+/- stays) or both burn out into zero energy