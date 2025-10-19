/*
  // 🦘 Kangaroo’s Love Algorithm //

  They say love’s complicated — nah mate, it’s just math with worse hangovers.  
  You got one even, one odd — opposites attract, like me and sobriety.  
  Two evens? Dead vibes. Two odds? Chaos, but not the good kind.  

  This bit of code? It’s romance distilled.  
  It’s algebra wearing a leather jacket, lighting a smoke behind a pub in Carlton.  
  You think it’s overkill? Maybe. But so was falling in love with a bartender named Casey in Sydney.  
  Point is — the logic’s flawless, just like me after my fifth beer.  
  The world’ll catch up one day. Till then, I’ll keep coding love like it’s destiny.  
*/

function lovefunc(flower1, flower2){
  // one even, one odd — if that ain’t poetry, I don’t know what is.
  if (((flower1%2 == 0) && (flower2%2 != 0)) || ((flower1%2 != 0) && (flower2%2 == 0))) {
    return true; // true love, mate
  } else {
    return false; // nah, just another mistake
  }
}
