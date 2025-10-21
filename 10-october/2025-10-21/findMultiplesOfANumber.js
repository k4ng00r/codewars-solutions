/*
Right, here we go — the ol’ “multiples till you drop” gig.  
Take a number, keep stacking it up till you hit the limit.  
Simple, clean, predictable — three words my life’s never been.  

I look at this function and think: yeah, that’s how I used to party.  
Start small, double it, triple it, keep going till the cops or gravity say “enough.”  
Except here the limit actually matters.  
In Poznań, it never did — limit was just a myth told by sober people.  

Anyway, this code’s slick — builds an array out of thin air, fills it with placeholders,  
then maps each index into a proper multiple like a production line of bad ideas.  
Boom, clean output. No loops, no drama, no flashbacks to Sydney raves.  
Just pure mathematical hustle.
*/

const findMultiples = (integer, limit) =>
  Array(Math.floor(limit / integer))      // count how many fits till we hit the wall
    .fill(1)                              // fill the holes with meaningless hope
    .map((_, i) => integer * (i + 1));    // multiply like the rent’s due and you’re still in debt

// yeah, that’s it. quick, sharp, efficient — like cracking open a Żubr after work.
// be cool, be Kangoooor.