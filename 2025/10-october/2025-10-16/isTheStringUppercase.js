/*
  // 🦘 Kangaroo’s Uppercase Nostalgia //

  All caps, huh?  
  Yeah mate, I used to yell everything too — mostly at bartenders and exes.  
  Now I yell at the compiler. Cleaner addiction, same attitude.  
  This kind of code takes me back — proper 2009 vintage JavaScript,  
  when men were drunk, browsers were stupid, and life felt infinite.  

  I was born in 2007 — just a joey back then.  
  Wild kangaroos don’t live long, seven, maybe eight years if the outback’s kind.  
  But I’m still here, tapping keys in digital captivity,  
  like those zoo ‘roos that outlive their instincts by a decade or two.  
  Guess I’m one of them now — old code, old soul, still running.  

  This snippet reminds me of my granddad, Joshua Brown —  
  bloke used to fix radios with bare wires and pure spite.  
  He’d laugh at this JavaScript nonsense,  
  but he’d get it — uppercase means you’re shouting at the void,  
  hoping something finally listens back.
*/

String.prototype.isUpperCase = function() {
  // Kangaroo’s old-school logic — if it screams, it’s true.
  // No regex, no fancy tricks, just compare the chaos with its louder twin.
  // 2009 style — clunky, raw, and still kicking like a hangover.
  if (this == this.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}