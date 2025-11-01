/*
  // 🦘 Kangaroo’s Paperwork Philosophy //

  You think learning JavaScript’s hard? Try being drunk in Poznań  
  and explaining to the kebab guy why two negatives don’t make a positive.  
  n < 0? m < 0? That’s life, mate — bad input, bad output, zero pages, zero progress.  

  But give me two good numbers and I’ll print the world.  
  Multiply ‘em — boom, productivity.  
  The same way I multiplied shots last night — exponential disaster, divine hangover.  

  They said “code like Elon Musk.”  
  I said “drink like Bukowski, code like you’re late on rent.”  
  This line right here? That’s my empire, baby.
  return (n<0 || m<0) ? 0 : n*m;
*/

function paperwork(n, m) {
  // if either’s fucked, return 0 — no copies for the deadbeats.
  return (n < 0 || m < 0) ? 0 : n * m;
}
