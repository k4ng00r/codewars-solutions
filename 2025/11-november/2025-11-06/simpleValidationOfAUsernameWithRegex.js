// door policy for usernames: lowercase letters, digits, underscores, 4–16 chars, no funny business ( ͡° ͜ʖ ͡°)
// anchors at both ends so nothing sneaks in from the shadows
// Poznań rain outside, Melbourne sun in the skull; regex keeps the peace while I nurse a hangover
// if it’s “John_Doe” — nope. lowercase only. rules are rules, k***a.

function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/.test(username); // whole string must match, not just a polite fragment
  return res;                                     // true for clean IDs, false for chaos
}