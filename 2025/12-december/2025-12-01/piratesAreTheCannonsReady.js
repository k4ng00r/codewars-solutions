// cannonsReady: "are we actually prepared, or is this another clown show?" ( ͡° ͜ʖ ͡°)
// gunners is an object like { Mike: 'aye', Jack: 'nay', ... }
// goal: if EVERYONE says 'aye' → 'Fire!'
// if at least one muppet says 'nay' → 'Shiver me timbers!'
const cannonsReady = (gunners) => 
  // Object.values(gunners) -> grab all the answers, ignore the names
  // .every(gunner => gunner === 'aye') -> everyone must be on board, no passengers
  // true  -> all 'aye'  → captain screams "Fire!"
  // false -> someone slacked → back to yelling and threats of plank-walking
  Object.values(gunners).every(gunner => gunner === 'aye')
    ? 'Fire!'
    : 'Shiver me timbers!';
// in short: this is the "no half-measures" button
// if this ever returns 'Fire!' with a 'nay' inside, you’ve got a traitor or a bug.
// either way, someone’s going overboard (figuratively, HR, relax)