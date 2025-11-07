// North Pole bouncer rules: exact name + exact password or back to the snowdrift ( ͡° ͜ʖ ͡°)
// case-sensitive, punctuation-picky. “Santa” isn’t “Santa Claus”, and “Ho Ho!” isn’t cutting it.
// somewhere between sleigh bells and caffeine, strict equality still saves Christmas. k***a.

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === 'Santa Claus' && password === 'Ho Ho Ho!') return true; // VIP list of one
  return false; // everyone else queue for cocoa
};

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r