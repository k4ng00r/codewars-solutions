// Seven-day roulette: Sunday yawns, Monday negotiates, Friday sprints, Saturday forgets to check the time.
// Late tram in Poznań, calendar stuck to my glove; I count on fingers and hope Melbourne’s sun is patient. ( ͡° ͜ʖ ͡°)
// Input is a number 1–7; we hand back the day it belongs to, no lectures, no meetings.

function whatday(num) { 
  switch(num) {
    case 1:
      return 'Sunday';     // soft start, promises and pancakes
    case 2:
      return 'Monday';     // ambition with a coffee dependency
    case 3:
      return 'Tuesday';    // the week remembers its chores
    case 4:
      return 'Wednesday';  // halfway banner, slightly crumpled
    case 5:
      return 'Thursday';   // momentum hums, plans hatch
    case 6:
      return 'Friday';     // pockets jingle, shoes volunteer
    case 7:
      return 'Saturday';   // glorious mischief, alarm off by law
    default:
      return 'Wrong, please enter a number between 1 and 7'; // if time gets weird, we set it straight
  }
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r