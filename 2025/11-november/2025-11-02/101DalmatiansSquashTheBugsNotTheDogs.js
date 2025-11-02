// puppy panic protocol: translate headcount into appropriate level of hysteria ( ͡° ͜ʖ ͡°)
// input is always a number ≥ 1, so no zero-dog existential crisis today
// mapping:
//   ≤10  -> "Hardly any"                // tiny floof parade
//   ≤50  -> "More than a handful!"      // arms full, pockets empty
//   ==101-> "101 DALMATIANS!!!"         // the legend, cue trumpets
//   else -> "Woah that's a lot of dogs!"// statistically furry chaos
// Poznań drizzle outside, Melbourne sun in my skull; counting dogs like invoices
// Żabka znowu zamknięta, k***a, więc zamiast smakołyków mamy czysty ternary kebab ლ(ಠ益ಠლ)

function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]));
  return respond; // verdict delivered; now hide the shoes
}