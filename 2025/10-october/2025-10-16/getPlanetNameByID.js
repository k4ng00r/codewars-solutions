/*
  // 🦘 Kangaroo’s Planetary Hangover //

  Planets, huh? Used to stare at the stars back in Poznań,  
  lying on a park bench, drunk, dreaming of a place where my liver could retire.  
  Now I’m mapping IDs to planets — Mercury, Venus, Earth…  
  pretty sure I’ve woken up on half of them at some point.  

  Didn’t learn coding ‘cause I loved space or syntax —  
  my mate told me there’s money in it, and I thought,  
  “well, booze ain’t free and Melbourne ain’t cheap.”  
  Never checked justjoinit, didn’t care about salaries —  
  I just knew one day I’d code my way back to the southern stars.  

  And yeah, maybe I went a bit overboard with the `break`s,  
  but after the life I’ve had, I know what happens when you forget to stop.  
  The default’s there for the lost ones — like me once,  
  floating somewhere past Neptune, holding a bottle and a half-finished dream.
*/

function getPlanetName(id){
  // Kangaroo’s cosmic navigation — find your planet or get lost in space.
  // Each `case` is a stop on the booze-fueled solar system tour.
  // The `break`s keep me from falling into Jupiter when I’m aiming for Earth.
  // And if you hit the `default`, mate — you’ve gone too far. Time to sober up.
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
    default:
      name = 'We\'re out of space, Captain!'
  }
  
  return name;
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r