// nextId: find the smallest unused non-negative ID in the chaos pile ( ͡° ͜ʖ ͡°)
// imagine a drunk database admin throwing IDs into a bucket, your job is to find the first gap
const nextId = ids => {
  // if the smallest value is already > 0, it means 0 is unused
  // like looking at your life and realising you skipped "step 0: get enough sleep"
  if (Math.min(...ids) > 0) return 0;

  // sort them first so we can scan for holes
  // yes, this mutates the original array, no, we are not talking about it
  // i = loop index, sorted = ids sorted from "rock bottom" upwards
  for (let i = 0, sorted = ids.sort((a, b) => a - b); i < sorted.length; i++) {
    // if the gap between two neighbours is bigger than 1, we found a missing ID
    // e.g. [0,1,2,4] -> at 2 and 4 the gap is 2, so 3 is the lost child
    if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1;
  }

  // no gaps? fine. then the next free ID is just max + 1
  // like stacking beer cans: if you’ve got 0..7, the next one is 8, obviously
  // flashback: Codewars nights in Poznań, trying to sort my life the way this function sorts IDs
  return Math.max(...ids) + 1;
}