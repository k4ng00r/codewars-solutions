// all(): tiny existential judge for arrays ( ͡° ͜ʖ ͡°)
// you hand it a list and a test function,
// it walks through every element asking "you good, mate?" 
// if even one says "nah", whole thing fails
function all( arr, fun ){
  // arr.every(fun) -> built-in bouncer:
  // returns true only if `fun(x)` is truthy for EVERY element in arr
  // empty array? .every() returns true, like:
  // "no one messed up, because no one showed up" – flawless logic
  // flashback: code review in Melbourne, whole team "on holiday", tests still green somehow
  return arr.every(fun);
  // if this ever returns false when all elements pass,
  // congrats, you’ve unlocked a new JS bug category and I’m going back to the pub
}