// calendar roulette at 3 a.m.: how many days in this month, mate? ( ͡° ͜ʖ ͡°)
// I’ve got Poznań drizzle on the window, Sydney sun squatting in my skull,
// and a switch statement that drinks less than I do. Not changing a line, just mumbling in the margins.
// rules: 31-day months swagger in a pack, 30-day months brood together, February shows up short and mysterious.
// leap years? not tonight. my headache has boundaries, c***o.

function howManydays(month){
  var days;
  switch (month){
    case 1:; case 3:; case 5:; case 7:; case 8:; case 10:; case 12:
      // the loud crowd: January, March, May, July, August, October, December — 31 and proud
      days = 31; break;
    case 4:; case 6:; case 9:; case 11:
      // the even-keel crew: April, June, September, November — reliable 30, like a decent bassline
      days = 30; break;
    case 2:
      // February: shows up late, leaves early, never explains — 28 and done
      days = 28; break;
    default:
      // if we’re here, someone fed us a gremlin. I’m not your therapist.
      return 'Invalid month';
  }
  // hand back the count and pretend the night is young
  return days;
}

// pause. flashback. tram bell, lukewarm coffee, a promise to write simpler code.
// this is that promise. it passes, it purrs, and I’m going to sleep before I jinx it. k***a.