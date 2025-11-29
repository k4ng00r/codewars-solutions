// parseF: take whatever the universe throws at you and try to squeeze a number out of it ( ͡° ͜ʖ ͡°)
// if it can't be turned into something numeric, we bail out with null
function parseF(s) {
  switch (typeof s) {
    case 'number': 
      // already a number, no need to overthink it
      // like waking up and realising at least *one* thing in life is in the right type
      return s;

    case 'bigint': 
      // big boy integer – JS technically treats this as its own beast
      // here we just pass it straight through like "you know what you’re doing, mate"
      return s;

    case 'string': 
      // string: could be "42", "3.14", "0", "NaN", "two beers"…
      // special treat for '0' because parseFloat('0') is falsy and would get thrown out otherwise
      return s === '0' 
        ? 0 
        : parseFloat(s) 
          ? parseFloat(s) 
          : null;
      // if parseFloat(s) gives something truthy, we use it
      // if not, we shrug and drop null like "yeah, that wasn’t a number, champ"
      // classic JS: true/false based on vibes and coercion

    default: 
      // everything else – objects, arrays, booleans, undefined life choices…
      // we just quietly return null and pretend we didn’t see anything
      return null;
  }
}