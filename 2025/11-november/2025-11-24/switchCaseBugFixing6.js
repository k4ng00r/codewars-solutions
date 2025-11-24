// Timmy’s tiny calculator, version "I swear it works now" ( ͡° ͜ʖ ͡°)
// feed it an object like { a: 2, b: 3, operation: '+' } and hope for the best
function evalObject(value){
  // start with 0, like my motivation on a Monday
  var result = 0;
  // operation decides which bit of arithmetic chaos we’re doing
  switch(value.operation){
    // plus: basic "let’s just add stuff and pretend we’re good at maths"
    case'+': result = value.a + value.b; break;
    // minus: removing things, like my chances of getting back to Melbourne
    case'-': result = value.a - value.b; break;
    // divide: careful here mate, division by zero and everything explodes
    case'/': result = value.a / value.b; break;
    // multiply: number bulking season, 3 meals and 2 snacks a day
    case'*': result = value.a * value.b; break;
    // modulo: "what’s left over after life kicks you through /"
    case'%': result = value.a % value.b; break
    // power: Math.pow, aka "send this number into orbit"
    case'^': result = Math.pow(value.a, value.b); break;
    // if someone sends unknown operation, we silently return 0
    // classic: no error, just quiet disappointment
    default:;
  }
  // hand back whatever we ended up with
  // if it’s not what you expect, blame Timmy, not the kangaroo
  return result;
}