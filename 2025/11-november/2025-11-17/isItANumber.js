// input: random string the human swears is "just a number, mate"
// output: true if it's a legit single int/float, false if it's chaos ( ͡° ͜ʖ ͡°)
const isDigit = s => {
  // step 1: trim the drama from both sides
  // spaces on the edges are like hangover thoughts – useless clutter, chop chop
  const trimmed = s.trim();

  // empty after trim? that's not a number, that's my bank account on a Monday
  if (trimmed === "") return false;

  // isNaN = tiny JS bouncer at the door
  // !isNaN(trimmed) → "ok, looks like a number-ish thing"
  // extra check: no spaces inside, because "3  5" is not math, it's a cry for help
  // flashback: late night in Poznań, parsing strings instead of catching sunrise in Melbourne
  return !isNaN(trimmed) && !trimmed.includes(" ");
  // if true: you got a nice clean number string
  // if false: it's either poetry, a typo, or both (╯°□°）╯︵ ┻━┻
};