/*
  // 🦘 Kangaroo’s Bus Stop Logic //

  Funny story, mate — this one’s about a bus, but it might as well be my life.  
  Too many people wanting a ride, not enough space — story of Poznań’s benches and Melbourne’s bars.  
  Back then I wasn’t coding, I was hitchhiking through bad habits,  
  always one seat short of salvation.  

  I didn’t pick up JavaScript ‘cause I loved it.  
  My mate said there’s money in it — proper cash, steady gigs, remote jobs,  
  the kind where you don’t wake up under a bridge.  
  Never checked justjoinit, didn’t need to — faith and caffeine were enough.  
  Every function I write now is one step closer to that one-way ticket  
  back to Melbourne — back to sunlight, chaos, and overpriced beer.  

  These days, I’m like Bob the bus driver —  
  always calculating if there’s enough room left for my past,  
  or if I’ve gotta leave some ghosts behind at the stop.
*/

const enough = (cap, on, wait) =>
  // Kangaroo’s commuter math — check if the bus can take the load.
  // If too many drunks at the stop, you leave a few behind.
  // Wait > (cap - on)? Then the bus is full, mate — spit out who’s staying.
  // Otherwise, all good — doors close, wheels roll, no one left crying.
  wait > (cap - on) ? (wait - (cap - on)) : 0;

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r