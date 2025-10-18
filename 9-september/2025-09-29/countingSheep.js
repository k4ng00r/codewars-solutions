/*
  // 🦘 Kangaroo’s Sheep Counter //

  Counting sheep, mate… ha!  
  Back in Poznań I used to count ceiling cracks when I couldn’t sleep.  
  Or the number of bottles left before sunrise.  
  Once, I even tried counting clouds — but they moved faster than my head could.  

  I remember this one night — -12°C, one wet blanket,  
  and a cat named Stefan sleeping on my chest for warmth.  
  I wasn’t thinking about code or loops back then, just about not freezing.  
  Now I’m counting virtual sheep in a clean editor,  
  and somehow that feels even weirder.  

  My mate told me there’s money in coding —  
  didn’t check justjoinit, didn’t ask how much,  
  just said “sure” and traded hangovers for headaches.  
  Still waiting for that Melbourne ticket though.  

  Anyway, yeah, the code —  
  loops through the array, checks who’s still around,  
  skips the ghosts, and keeps the living.  
  Sorta like life, innit?
*/

function countSheeps(sheep) {
  // okay, focus… focus, kangaroo…  
  // start at zero, like the fridge after payday.
  let counter = 0;

  // classic for loop, nothing fancy —  
  // i < sheep.length, not <=, learned that one the hard way after 3 beers.
  for (let i = 0; i < sheep.length; i++) {
    // if the sheep’s here and not a hallucination — add one.
    if (sheep[i]) counter++;
  }

  // return the headcount before they wander off again.
  return counter;
}
