// mixed bag of digits and fibs: turn every item into a Number, then add the lot ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the pane, Melbourne sun in my skull; maths funds the one-way ticket
// heads-up: any truly non-numeric string turns into NaN and poisons the pool — fair game for a budget dataset
// Żabka znowu zamknięta, k***a, więc sumuję tablice zamiast chipsów ლ(ಠ益ಠლ)
const sumMix = (x) => x.map(Number).reduce((acc, curr) => acc + curr, 0);