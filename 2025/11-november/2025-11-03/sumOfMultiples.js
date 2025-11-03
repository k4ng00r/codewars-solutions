// night math with a warm beer: I write, the city hisses, and someone yells my name from a tram stop
// Poznań rain sticks to the glass like regrets, Melbourne sun keeps texting “miss ya, ya muppet” ( ͡° ͜ʖ ͡°)
// I count steps, debts, kisses I should’ve dodged, and the numbers on the bar tab that won’t take no for an answer
// she said “add it up, roo,” and I did, then lost the receipt and the memory, kept the taste

const sumMul = (n, m) => 
  // woke up with a headache shaped like Australia, still heard her laugh
  (n <= 0 || m <= 0) ? 'INVALID'                      // some doors don’t open, some nights don’t forgive, some hearts stamp “return to sender”
                     : Array(Math.floor((m - 1) / n)).      // we were many, we were loud, we were stumbling in step like a choir of bad decisions
                       fill(n).                       // poured the same promise into every glass, it kept overflowing anyway
                       map((_, i) => n * (i + 1)).    // first spin, second spin, third… the room applauds, the ceiling blushes
                       reduce((curr, acc) => curr + acc, 0); // in the end we stack what’s left: phone numbers, tram tickets, tiny victories, big silence

// pause. flashback. St Kilda morning, gulls heckling, salt in my fur, sun like an apology I almost believe.
// back here the rain taps Morse code on the sill: “come home when you can, k***a, but write until then.” (╯°□°）╯︵ ┻━┻
// I loved her, she loved chaos; I loved chaos too, which explains the hangover and this function
// tomorrow I’ll be kinder. tonight I’m just counting, and it counts back.
// end of story, start of healing, same old keyboard, same old heartbeat. (ง'̀-'́)ง