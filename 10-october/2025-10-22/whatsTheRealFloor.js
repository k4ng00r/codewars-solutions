// Aussie chaos begins
const getRealFloor = n => {
  if (n <= 0) return n; 
  // basement logic: below ground, below hope, nothing changes
  else if (n < 13) return n - 1;
  // Americans count weirdly. one floor up, but mentally down.
  // somewhere here they put a Starbucks instead of logic ( ͡° ͜ʖ ͡°)
  return n - 2;
  // the cursed 13, deleted by superstition — I once lived on 13, now I live nowhere
};
// no king, no sense, no thirteenth floor
// Europe: 1 == ground, America: ground == who even knows
// sometimes I wish my life had a getRealFloor() too — just skip a few bad levels and keep climbing