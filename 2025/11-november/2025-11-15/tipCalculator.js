// tipping logic: or, "how not to look like a broke goblin in front of the waiter" ( ͡° ͜ʖ ͡°)
// bill comes in, soul leaves body, this function pretends you're generous anyway
function calculateTip(amount, rating) {
  // first move: whatever drunk noise the human typed, lower-case it
  // been there: "GrEaT", "EXCELLENT", "bro just round it up", brain on 3fps
  switch (rating.toLowerCase()) {
    case 'terrible': 
      // service so bad even my therapist would under-tip here
      return 0;
    case 'poor': 
      // "poor" = you still leave something so they don't spit in your next soup
      return Math.ceil(amount * 0.05);
    case 'good': 
      // standard "I’m pretending I have my life together" percentage
      return Math.ceil(amount * 0.1);
    case 'great': 
      // here the waiter actually smiled and didn’t judge your card decline attempt
      return Math.ceil(amount * 0.15);
    case 'excellent': 
      // Melbourne-level service in Poznań: unicorn tier, pay up, mate
      return Math.ceil(amount * 0.2);
    default: 
      // this is for creative inputs like "mid", "meh", or "idk bro"
      // kata wants a string, real life wants you to ask "how much should I leave?" for the 100th time
      return 'Rating not recognised';
  }
  // flashback: splitting tips after a shift, everyone arguing, me just calculating in my head instead of touching real money
  // now I write functions like this hoping one day they buy a one-way to Melbourne (ง'̀-'́)ง
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r