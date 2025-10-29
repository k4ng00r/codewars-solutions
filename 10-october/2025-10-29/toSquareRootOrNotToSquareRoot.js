// Kangoor Joshua Brown doing hangover algebra: root it if it’s a perfect square, else send it to the gym.
const squareOrSquareRoot = array => // pure function, no side quests, no surprises
  array.map( // map because we return a fresh array, not poking the old one (Poznań trams approve)
    el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2 // sqrt if integer, otherwise square; 4→2, 3→9, 9→3, tidy as a Melbourne lawn ( ͡° ͜ʖ ͡°)
  );
// Edge notes: input is positive and non-empty — no need to babysit nulls. Carry on.