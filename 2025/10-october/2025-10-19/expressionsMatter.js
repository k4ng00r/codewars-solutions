/*
  // 🦘 Kangaroo’s Algebraic Hangover //

  Obvious? Mate, *nothing’s obvious* after a three-day bender in Stary Rynek.  
  You think you’re just adding a + b + c,  
  and suddenly there’s brackets, priorities, and an existential crisis about operator order.  

  In Melbourne I once argued with a dealer about whether multiplication beats addition.  
  He said “depends what you’re mixing.”  
  He wasn’t wrong.  

  These ops? just booze and math wearing each other’s clothes.  
  I try every combo, because I’ve learned the hard way —  
  the biggest payoff’s always hiding in the messiest parentheses.  
*/

function expressionMatter(a, b, c) {
  // two operations — like beer and rum, both get you there.
  const ops = [
    (x, y) => x + y,
    (x, y) => x * y
  ];

  // throw everything in the bag, see what floats.
  let results = [];

  for (const op1 of ops) {
    for (const op2 of ops) {
      // (a op1 b) op2 c — the straight road.
      results.push(op2(op1(a, b), c));
      // a op1 (b op2 c) — the detour through regret.
      results.push(op1(a, op2(b, c)));
    }
  }

  // pick the biggest win — just like picking the strongest bottle.
  return Math.max(...results);
}