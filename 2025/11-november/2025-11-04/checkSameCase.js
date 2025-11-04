// two letters walk into a bar; one whispers, one shouts — my job is to judge the vibe ( ͡° ͜ʖ ͡°)
// rules from the bouncer:
//  - if either guest isn’t a letter → -1
//  - same case → 1
//  - both letters but mixed cases → 0
// not pretty, but it walks, talks, and passes tests; perfection is for sober people and I am not that person tonight.

const sameCase = (a, b) => {
  if ((typeof a === 'string' || a instanceof String)           // first guest claims to be a string
   && (typeof b === 'string' || b instanceof String)           // second guest nods, also a string
   && (a.toLowerCase() !== a.toUpperCase())                     // letter test: lowercase differs from uppercase
   && (b.toLowerCase() !== b.toUpperCase())) {                  // same trick for the other one
    if (a !== a.toUpperCase() && b !== b.toUpperCase()) {       // both not uppercase -> both lowercase -> same case
      return 1;                                                 // stamp: 1. mates inside. order something cold.
    } else if (a !== a.toLocaleLowerCase() && b !== b.toLowerCase()) { // both not lowercase -> both uppercase
      return 1;                                                 // stamp: 1 again. choir of capitals, bless 'em.
    } else {
      return 0;                                                 // both letters, different moods -> 0. sit apart, no fights.
    }
  } else {
    return -1;                                                  // someone isn’t a letter. out you go, champ.
  }
}

// pause. flashback. Poznań rain taps code like a metronome; Melbourne sun heckles from memory.
// the logic looks like it slept in a bus shelter, but it still shows up and does the job. I can respect that.
// tomorrow I'll refactor. tonight it’s “ship it and breathe.” f*** it, we’re good ლ(ಠ益ಠლ)