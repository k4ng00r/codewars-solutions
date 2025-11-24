// templateStrings: tiny ES6 flex pretending it's a big brain move ( ͡° ͜ʖ ͡°)
// you throw in a noun and an adjective, it glues them together like two people
// who definitely should not text each other after midnight
var templateStrings = function(noun, adjective) {
  // backticks, mate, not quotes. First time I saw this I thought my keyboard broke.
  // ${noun}      -> whatever poor thing you're describing
  // ' are '      -> diplomatic connector, very neutral, zero drama
  // ${adjective} -> how savage or polite you feel today
  const line = `${noun} are ${adjective}`;
  // pause. flashback. writing cheesy band bios in Melbourne,
  // now I’m in Poznań using the same skill to pass 8 kyu on a Tuesday.

  return line;
  // if this ever fails, it’s not JS, it’s the universe hinting you need sleep
}