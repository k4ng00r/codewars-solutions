/*
  // 🦘 Kangaroo’s Square Life //

  Square every number, add ‘em up — simple math, they said.  
  Yeah, well, so was quitting drinking, and look how that turned out.  
  Every time I look at these loops, I see my own — wake up, smoke, coffee, code,  
  smoke, code, maybe eat, maybe not, then stare at the ceiling till sunrise.  

  I didn’t get into coding ‘cause I cared about algorithms.  
  My mate said there’s good money in it, and I thought:  
  “money’s money, even if it smells like burnt circuits.”  
  Never checked justjoinit, didn’t ask about salaries —  
  I just knew if I grind long enough, maybe I’ll buy my way back to Melbourne.  

  And here I am, squaring numbers instead of debts, summing it all up —  
  trying to make the total come out positive for once.  
  Truth is, life’s kinda like this kata — simple in theory,  
  but you’ve gotta loop through the mess and clean it yourself.
*/

function squareSum(numbers){
  // alright, let’s see... start with sum = 0, because of course, there’s nothing at the start.
  let sum = 0;
  
  // for loop, yeah, basic stuff, nothing fancy —  
  // just go through every number like I go through cigarettes.
  for (let i = 0; i < numbers.length; i++) {
    // numbers[i] ** 2 — square it, like... y’know,  
    // math or karma or some shit, what goes around comes around.
    sum += numbers[i] ** 2;
  }

  // and now return sum — because even if it’s a mess,  
  // you’ve still gotta hand something in to get paid.
  return sum;
}