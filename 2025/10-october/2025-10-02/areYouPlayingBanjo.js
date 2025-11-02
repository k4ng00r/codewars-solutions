/*
I remember the first time someone called me “Roo.”  
Thought they were takin’ the piss, but nah — they meant it.  
Said I looked like the kinda bloke who’d play banjo on the side of a highway,  
half-drunk, half-free, whole mess.  
Guess they weren’t wrong.

So here I am, checking if *you* play banjo.  
If your name starts with R, mate, welcome to the club.  
You’re one of us — reckless, restless, rattling strings instead of paying bills.  
If not… well, maybe you’re better off.  
No one tells you the hangovers hit harder than the chords.

Anyway, that’s the code. Nothing fancy. Just a quick peek at the first letter,  
a tiny little character deciding your whole bloody destiny.  
Funny, huh? That one letter could mean “music and madness” or “Monday and meetings.”  
Life’s weird like that.
*/

function areYouPlayingBanjo(name) {
  // first thing I do? grab the first letter, like a cold beer from the crate
  const firstLetter = Array.from(name)[0];
  // now I stare at it, try to see if it’s got that spark — the R, the rebel, the rhythm
  return (firstLetter === 'R' || firstLetter === 'r') ?
    name + ' plays banjo' :       // yeah mate, you’re one of us — sunburnt, sweaty, and probably barefoot
    name + ' does not play banjo';// nah, you’re clean. you probably floss. good for you, honestly.
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r