// midnight sanity check: is this string exactly one digit, 0–9, and nothing else? ( ͡° ͜ʖ ͡°)
// anchors say “start/end,” \d says “a single digit,” no tourists allowed.
// Poznań drizzle on the pane, Melbourne sun in my head; regex keeps the peace, I finish my tea.
// if it’s “7” → true; “07”/“7a”/“ ” → false. neat, tidy, done. f**k perfection, this runs.

String.prototype.digit = function() {
  return /^\d$/.test(this);
};