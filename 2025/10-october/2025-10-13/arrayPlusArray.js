// add two boxes of integers and pretend we did calculus ( ͡° ͜ʖ ͡°)
// merge the arrays, then fold them into a single sum like yesterday’s regrets
// inputs are integers, output is a number; neat, boring, reliable — my therapist’s dream
// Poznań drizzle outside, Melbourne sun in my head; both say “reduce it, champ”
// tiny note: concat builds a new array; fine for kata, just don’t feed it a million items, ya maniac
// also: if either array is empty, the 0 seed keeps things civil, no NaN dramas
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, curr) => acc + curr, 0);

// k***a, it even works on negatives; maths doesn’t care about your mood (╯°□°）╯︵ ┻━┻