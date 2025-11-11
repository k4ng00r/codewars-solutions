// late-night calculator for tired pirates and braver accountants ( ͡° ͜ʖ ͡°)
// rules:
//  - a and b must be real numbers, not strings in sunglasses
//  - sign is one of + - * /
//  - otherwise: "unknown value"
// Poznań drizzle outside, Melbourne sun in my head; arithmetic still shows up when nothing else does. k***a.

const calculator = (a, b, sign) => {
  // be strict about types; isNaN('2') lies to your face, Number.isFinite doesn’t
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
    return 'unknown value';
  }

  switch (sign) {
    case '+': return a + b;   // add like it’s payday
    case '-': return a - b;   // subtract like rent just cleared
    case '*': return a * b;   // multiply the hope
    case '/': return a / b;   // divide the chaos (JS handles zero with Infinity; tests are fine with that)
    default:  return 'unknown value'; // mystery operator? not tonight
  }
};

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r