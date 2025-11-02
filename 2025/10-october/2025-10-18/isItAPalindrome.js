/*
  // 🦘 Kangaroo’s Mirror Test //

  Palindrome, huh?  
  Reads the same backward and forward — wish I could say the same about my life.  
  Back in Poznań, I used to wake up in alleyways and swear I’d change.  
  Next day? Same script, same bottle, same hangover. True palindrome energy.  

  My mate said there’s money in coding,  
  so I swapped cheap beer for cheap coffee and started flipping strings instead of moods.  
  Didn’t check justjoinit, didn’t even know what syntax highlighting was.  
  Just dove in — forward, backward, repeat.  

  Melbourne’s still on the other side of the mirror,  
  waiting for me to line my life up just right so it reads the same both ways.  
  Till then, I’ll keep running this check — on code, and on myself.
*/

const isPalindrome = x =>
  // okay so first... lower it all, yeah, we’re not case-sensitive here, life’s messy enough.
  x.toLowerCase() ===
  // then split the string — break it apart like my concentration.  
  // reverse it — obvious, but still feels poetic, doesn’t it?  
  // join it back — glue the pieces together and hope no one notices the cracks.  
  x.split('').reverse().join('').toLowerCase();

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r