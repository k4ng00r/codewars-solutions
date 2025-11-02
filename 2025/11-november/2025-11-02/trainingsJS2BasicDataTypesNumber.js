// numeric pub crawl: make each function stumble its way to 100, no code changes, just breadcrumbs ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the glass, Melbourne sun in my skull; maths pays for the ticket home
// rule of the night: pick two globals (v1..v6) so op(a,b) === 100; no funny business, no refactors, just vibes

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   // 50
      b = v1;   // 50
  return a + b; // 50 + 50 = 100, easy win, buy a cheap tinny
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3, // 150
      b = v1; // 50
  return a - b; // 150 - 50 = 100, subtraction with a smug grin
}

function equal3(){
  let a = v5, // 2
      b = v1; // 50
  return a * b; // 2 * 50 = 100, like push-ups for integers
}

function equal4(){
  let a = v4, // 200
      b = v5; // 2
  return a / b; // 200 / 2 = 100, neat slice down the middle
}

function equal5(){
  let a = v6, // 250
      b = v3; // 150
  return a % b; // 250 % 150 = 100, remainder struts in like it owns the place
}

// audit passed: five ways to 100 without touching the wiring
// Żabka’s closed again, k***a, so I’m celebrating with comments instead of snacks ლ(ಠ益ಠლ)