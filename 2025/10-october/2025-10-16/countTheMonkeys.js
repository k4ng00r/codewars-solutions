/*
  // 🦘 Kangaroo’s Jungle Mathematics //

  Monkeys, mate. Always monkeys.  
  Back in Poznań, we didn’t have forests — just concrete, smog, and people pretending not to see you.  
  But I get it, the kid’s gotta learn to count, same way I had to learn to crawl out of the gutter.  
  So here we are, counting from 1 to n, pretending it means something.  

  I didn’t start coding for fun — fun was gone years ago, somewhere between the drugs and the debt.  
  My mate told me there’s money in it, I didn’t even check justjoinit,  
  just nodded and lit another smoke.  
  Now I write functions about monkeys while dreaming of Melbourne —  
  that sweet chaos, the booze, the warmth.  
  Every number I count is one step closer to home, one line of code away from freedom.  
*/

const monkeyCount = (n) =>
  // okay so first... ehhh, yeah, Array(n) —  
  // creates a bunch of empty slots, like my brain on Monday morning.
  Array(n)
    // then fill(1) — don’t ask why one, it just keeps JS from losing its shit.
    .fill(1)
    // map... yeah, map, I know map... it's the one that loops but fancier.
    // i + 1 because kid’s gotta start from one, not zero —  
    // zero’s for accountants and people who never lived under a bridge.
    .map((_, i) => i + 1);

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r