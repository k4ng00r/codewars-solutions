/*
  // 🦘 Kangaroo’s Slice of Life //

  Remove the first and last characters?  
  Mate, that’s basically what life did to me already.  
  Took the start, chopped off the end, left me somewhere in the middle —  
  half-broken, half-sober, still running on caffeine and regret.  

  Back in Poznań, mornings started with a smoke and ended in confusion.  
  Now I cut strings instead of cutting people off. Cleaner business.  
  My mate told me coding pays well — didn’t check justjoinit,  
  didn’t check the rates, just believed him like an idiot with a dream.  
  Melbourne’s still waiting for me — the bars, the chaos, the ocean breeze.  
  Every `.slice()` I write gets me a millimetre closer to that one-way flight.  

  Some nights I look at my code and think:  
  yeah, we’re not so different — both missing a few parts,  
  but still doing the job somehow.
*/

function removeChar(str){
  // okay, easy one... if it’s only two characters, we nuke the whole thing.  
  // just return an empty string — like my fridge on a Monday morning.  
  if (str.length == 2) return '';
  
  // slice(1, -1)... yeah, yeah, I know — start after the first, stop before the last.  
  // like trimming the crust off a sandwich, or cutting toxic people from your life.  
  // it’s neat, it’s clean, it works... whatever, next task.
  else return str.slice(1, -1);
};