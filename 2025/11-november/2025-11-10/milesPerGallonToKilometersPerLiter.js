// midnight mileage alchemy: turn mpg into kpl without spilling a drop ( ͡° ͜ʖ ͡°)
// rule of the road: kpl = mpg * (km per mile) / (L per imperial gallon)
// Poznań drizzle on the window, Melbourne sun in my head; units behave even when I don't
// accuracy within 0.01? sweet — the math’s tighter than my budget, k***a.

const IMPERIAL_GALLON = 4.54609188; // litres in one imperial gallon
const MILE = 1.609344;              // kilometres in one mile

const converter = mpg => mpg * (MILE / IMPERIAL_GALLON); // pure ratio magic → kpl
// example: converter(30) ≈ 30 * (1.609344 / 4.54609188) ≈ 10.62 kpl