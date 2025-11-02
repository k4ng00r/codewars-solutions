/*
Midnight.  
That cursed hour where everything’s quiet enough to hear your own bullshit.  
I’ve seen too many of ‘em — some in Melbourne with skyline lights,  
some in Poznań under flickering street lamps and the hum of old trams.  

Now here I am, counting time in milliseconds,  
like that’s gonna fix the hole where the past used to be.  
Every hour’s 3.6 million little regrets, every minute another 60,000 missed calls,  
and every second… yeah, that one always hurts the slowest.  

But math doesn’t care. It just ticks, clean and cold.  
And so does this function.  
Simple, efficient — unlike me, mate.  
Still, it gets the job done. Every tick since midnight,  
every drip of coffee gone cold, measured perfectly.
*/

function past(h, m, s){
  //#Happy Coding! ^_^ — yeah, sure mate, happy fucking coding indeed.
  // turn the hours into milliseconds — each one heavier than the last
  // minutes too, add ‘em up like unpaid bar tabs
  // seconds, tiny bastards that still manage to make you late for everything
  return (h*3_600_000) + (m*60_000) + (s*1_000); 
  // and there you go — a neat little number telling you how long it’s been
  // since another meaningless midnight slipped away
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r