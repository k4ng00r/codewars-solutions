// night shift at the ASCII docks: numbers come in, vowels go out ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the window, Melbourne sun renting space in my skull; I translate like a tired smuggler
// rule of the alley: don’t touch the code, only whisper in the margins. it runs. I'm oddly happy. k***a.

const vowels = {
  a: 97,  // 'a' checking in at 97 — first to the party, last to leave
  e: 101, // 'e' shows up loud at 101
  i: 105, // 'i' is the skinny one at 105
  o: 111, // 'o' rolls in like a wheel at 111
  u: 117  // 'u' brings the echo at 117
};

const isVowel = digit => {
  // detective work: sift the entries, match the numeric code, hand back the letter
  // if no match, keep the original number — not everyone wants to be poetry tonight
  const entry = Object.entries(vowels).find(([letter, code]) => code === digit);
  return entry ? entry[0] : digit;
}

const isVow = a => a.map(el => isVowel(el)); 
// conveyor belt: each element steps on, either turns into a vowel
// or stays a stubborn number. ding. next. (╯°□°）╯︵ ┻━┻

// pause. flashback. ferry wind, neon reflections, a promise to keep things simple.
// kept. it passes. small win in the jar. ( ͡° ͜ʖ ͡°)

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r