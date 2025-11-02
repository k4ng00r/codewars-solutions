/*
  // 🦘 Kangaroo’s Power Trip //

  Powers of two, eh? Yeah, sounds simple when you’re sober.  
  But I’ve done harder math trying to figure out how many beers I could buy  
  with the change from a bottle return behind Żabka.  
  Math was never my thing — too many numbers, not enough nicotine.  

  My mate told me there’s good cash in coding,  
  said “you just use math sometimes,” and I believed him.  
  Didn’t check justjoinit, didn’t even Google “what the hell is an exponent.”  
  Just went all in — no plan, no backup, same as Melbourne in ‘15.  

  Now I’m sitting here, hungover, making powers of two for some digital gods.  
  2⁰, 2¹, 2² — every line a bit of order in the chaos.  
  And yeah, maybe I don’t get all the math,  
  but I get the grind — and that’s close enough, mate.
*/

const powersOfTwo = (n) =>
  // alright, so Array(n + 1)... yeah, that’s obvious,  
  // we need from 0 to n, not just n — kid stuff, basic counting, easy.
  Array(n + 1)
    // fill(1)... don’t ask, it’s just to keep JS from losing its bloody marbles with empty slots.
    .fill(1)
    // and now map — the old trick, yeah, index i,  
    // raise 2 to the power of i, because... exponents, I guess?  
    // 2 ** i — clean, sharp, mathematical, like vodka on an empty stomach.
    .map((_, i) => 2 ** i);

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r