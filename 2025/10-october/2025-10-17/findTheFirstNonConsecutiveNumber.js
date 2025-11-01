/*
  // 🦘 Kangaroo’s Non-Consecutive Hangover //

  Find the first non-consecutive number, huh?  
  Yeah, story of my bloody life, mate — nothing about me’s been consecutive.  
  One day I’m sober, next I’m sleeping behind a tram stop in Poznań.  
  Try to keep a straight sequence after three years of vodka dinners.  

  My mate told me coding pays.  
  Didn’t check justjoinit, didn’t even ask “how much.”  
  Just said “yeah, sure,” lit a smoke, and started pressing buttons.  
  Now I write code that finds what’s out of order —  
  probably why I relate to this kata more than I should.  

  Melbourne’s still the end of the array for me —  
  the last element in sight, waiting for me to finally line things up.  
  But knowing me, I’ll find another non-consecutive step before I get there.
*/

const firstNonConsecutive = arr =>
  // okay so yeah, arr.find(...) —  
  // goes through every poor bastard in the array till something feels off.  
  // index ? ... yeah, skip the first one, it’s always innocent.  
  // then check if value !== arr[index - 1] + 1 —  
  // basically: “oi, are you not following the rules, mate?”  
  // if yes, we’ve found our drunk friend in the sequence.  
  // and that ?? null at the end — yeah, fallback plan.  
  // when life gives you no chaos, you just return nothing and move on.
  arr.find((value, index) =>
    index ? value !== arr[index - 1] + 1 : false
  ) ?? null;