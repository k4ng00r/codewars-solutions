/*
Names. Funny things, really.  
Mine used to mean something back in Melbourne — Kangoor Joshua Brown.  
Now it’s just scribbles on old job applications and empty Żabka receipts.  

This little function here? It trims all that identity crap down to two letters and a dot.  
Just your initials — like the world’s shorthand for “we don’t care who you are, mate, just sign here.”  
Still, there’s beauty in it. Compact, sharp, like carving your name into wet concrete and walking away.  

Takes a full name — “Sam Harris,” “patrick feeney,” whatever poor bastard you are —  
splits it in half, grabs the first letters, jams a dot in between,  
and yells it back in uppercase like it’s reclaiming something that was never yours.  

So yeah, clean code. Brutal truth. Welcome to the abbreviation of existence.
*/

function abbrevName(name){
  // split it by space — one clean cut, like shaving off the past
  // map over the two words, snatch the first letter before it gets sentimental
  // join with a dot — punctuation for souls who’ve got no time for full sentences
  // toUpperCase, because small letters don’t survive hangovers or heartbreak
  return name.split(' ').map(word => word[0]).join('.').toUpperCase();
  // end result: identity reduced, dignity optional
}
