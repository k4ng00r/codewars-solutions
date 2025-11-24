// validateCode: tiny regex bouncer checking who’s allowed past the door ( ͡° ͜ʖ ͡°)
// rules: code must start with 1, 2 or 3 or it gets kicked to the curb
const validateCode = code => 
  // ^(1|2|3)
  // ^   -> start of the string, no drifting in late
  // (1|2|3) -> allowed VIP digits: 1, 2, or 3
  // .test(code) -> JS quietly turns the number into a string and asks:
  // "oi mate, do you start with 1 / 2 / 3 or not?"
  /^(1|2|3)/.test(code);
// returns true if it matches, false if not
// simple, brutal, no negotiations – unlike me arguing with my alarm at 7am in Poznań