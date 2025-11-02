/*
Ah, the good old short+long+short sandwich — symmetry for people who hate commitment.  
Two strings walk into a bar: one’s longer, one’s not. The short one wraps around the other  
like a cheap blanket on a cold Poznań night. Boom, poetic and useless, just how I like it.  

This function doesn’t ask why — just measures, compares, and hugs accordingly.  
No drama, no therapy session.  
If `a` is longer, `b` gets to be the bread; if not, switch it around.  
In the end, it’s always short-long-short, like me between paychecks and relapses.  

Also yeah, empty strings work too.  
You can love someone with nothing inside them — JavaScript sure doesn’t mind.
*/

const solution = (a, b) => 
  a.length > b.length ? b + a + b : a + b + a; 
// quick ternary duel — no loops, no trust issues
// measures both sides, picks who’s wrapping who
// result: one neat string burrito of code and emotional damage

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r