// midnight range run: start to stop, step by step, inclusive like an afterparty guest list ( ͡° ͜ʖ ͡°)
// if start >= stop or step <= 0, the bouncer says “nope” and the array stays empty
// Poznań rain drumming the window, Melbourne sun in my head; arithmetic keeps me honest
// somewhere between the first and last number I promised to sleep. I lied. k***a.

const generateRange = (start, stop, step) => {
  const result = [];
  if (start >= stop || step <= 0) return result;   // wrong vibes, wrong direction, go home
  for (let i = start; i <= stop; i += step) {      // steady march: 1, 1+step, 1+2*step...
    result.push(i);                                 // pocket each checkpoint like tram tickets and half-memories
  }
  return result;                                    // you made it; the city’s still awake, and so are we
};

// examples, whispered to the night:
// generateRange(1, 10, 1)  -> [1,2,3,4,5,6,7,8,9,10]
// generateRange(-10, 1, 1) -> [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1]
// generateRange(1, 15, 20) -> [1]  // started late, still counts