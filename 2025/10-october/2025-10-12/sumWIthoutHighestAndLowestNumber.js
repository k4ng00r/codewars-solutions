// sum the list but ignore exactly ONE smallest and ONE largest value (by value, not index)
// input validation: null/undefined, empty array, or length < 3 => 0 (nothing sensible to trim)
// duplicates? still remove only a single min and a single max — the brief’s crystal clear ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the glass, Melbourne sun in my head; math pays the ticket home
// Żabka zamknięta znowu, k***a, więc liczę zamiast chrupać ლ(ಠ益ಠლ)

function sumArray(array) {
  if (!array || array.length < 3) return 0; // not enough numbers to drop ends

  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let num of array) {
    sum += num;            // running total
    if (num < min) min = num; // smallest so far
    if (num > max) max = num; // largest so far
  }

  return sum - min - max;  // lop off one lowest and one highest, return the middle party
}