// billboard economics at 2 a.m.: pay per character, no '*' allowed, no mercy ( ͡° ͜ʖ ͡°)
// take the length, spawn that many prices, add like a bartender tallying regrets
// spaces count, hyphens count, the past counts too — the ad man always wins, k***a
// somewhere between Poznań drizzle and Melbourne sun, this still adds up to a ticket home

const billboard = (name, price = 30) =>
  Array(name.length)                 // one slot per character on the neon
    .fill(price)                     // every slot costs the same, like cover charge for letters
    .reduce((acc, curr) => acc + curr, 0); // no multipliers, just honest sweat and a long tab

// examples the night won’t let me forget:
// "Jeong-Ho Aristotelis", 30 -> 600
// "" -> 0  // silence is cheap; silence is also loud

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r