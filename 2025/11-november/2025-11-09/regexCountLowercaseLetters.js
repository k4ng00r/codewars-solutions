// lowercase headcount at 2 a.m.: how many tiny letters survived the night? ( ͡° ͜ʖ ͡°)
// take the string, sweep for a–z, count the bodies, don’t flinch.
// Poznań drizzle taps Morse on the sill; somewhere in my skull, Melbourne sun mutters “easy win, mate.”
// note: ASCII only — no fancy diacritics. your “ęśćół” can sit this one out, champ.
// also: match() can return null, so we don’t poke it without gloves. basic street smarts, really.

const lowercaseCount = str => str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;

// bonus whisper from a tired roo:
// calling match twice is like ordering two coffees and drinking one; fine for katas, not for marathons.
// but it passes, it purrs, and I’m not rewriting the universe tonight. f*** it, ship it ლ(ಠ益ಠლ)