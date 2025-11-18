// remove n exclamation marks from left to right
// basically a detox for overexcited punctuation ( ͡° ͜ʖ ͡°)
function remove(s, n) {
  // arrString will hold the cleaned-up sentence
  // like my inbox after a "select all → archive" moment
  const arrString = [];

  // split the string into characters and march through them
  // each "!" is a loud regret from last night
  for (let c of s.split('')) {
    // if we still have exclamation quota to remove
    // and current char is exactly "!" → erase the evidence
    if (n > 0 && c === '!') {
      n--; 
      c = ''; // symbolic execution: we nuke it here and pretend it never screamed
    } else {
      // either not "!", or we've already removed enough of them
      // so we keep the character, like the parts of the story we admit publicly
      arrString.push(c);
    }
  }

  // glue it all back together into a single string
  // now with fewer life choices shouted at full volume (╯°□°）╯︵ ┻━┻
  return arrString.join('');
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r