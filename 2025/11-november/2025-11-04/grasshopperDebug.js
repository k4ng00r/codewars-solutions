// Fahrenheit to Celsius — midnight edition.
// Poznań sky dripping, Melbourne sun grinning in my head; I do the math anyway ( ͡° ͜ʖ ͡°)
// spec note: C = (F - 32) * (5/9); below 0°C is "freezing", otherwise "above freezing".
// no rounding circus here; we speak raw numbers like truth and hangovers.

function weatherInfo(temp) {
  var c = convertToCelsius(temp);           // convert first, argue later
  if (c < 0)                                // below zero? ice bath vibes
    return (c + " is freezing temperature");
  else                                      // otherwise it’s survivable, like cheap coffee
    return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5/9); // peel off 32, squeeze by 5/9; schoolyard algebra, bar-stool wisdom
  return celsius;                           // ship the number; try not to stare at it too long, it stares back
}

// footnote from the roo: sensors lie, hearts lie, maths doesn’t. most days. k***a.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r