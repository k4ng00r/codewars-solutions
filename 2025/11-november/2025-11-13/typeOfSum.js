// type inspector at 3 a.m.: add two gremlins and tell me what kind of monster they become ( ͡° ͜ʖ ͡°)
// JS party rule: "+" is a flirt — numbers add, strings concatenate, booleans join the nearest bad idea
// so the sum might be a number, or it might turn into a string because someone whispered quotes at it
// Poznań drizzle knocks the window, Melbourne sun heckles from memory; I stare at types like they owe me rent
// if this returns "number" we celebrate quietly; if it returns "string" we pretend it was the plan
// it passes tests, it buys me five minutes of peace, and that’s enough tonight. f***ing magic, censored and tidy.

const typeOfSum = (a, b) => typeof (a + b);

// examples my headache won’t forget:
//  2 + 3        -> "number"
//  "2" + 3      -> "string"  // coercion, you slippery legend
//  true + false -> "number"  // 1 + 0 = 1, because of course
// anyway: ask typeof after you add, tell the truth, go to bed. k***a.