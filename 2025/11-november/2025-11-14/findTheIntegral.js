// brewery-napkin calculus at 2 a.m.: lift the power by 1, split the coeff by the new one ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the window, Melbourne sun renting a room in my skull; still, we integrate like it’s foreplay
// example echo: 3x^2 -> (3/3)x^3 -> "1x^3" — tiny miracle, medium hangover
// yes, the output’s a string; yes, the tests are picky; yes, I’m weirdly proud of this
// censor the chaos, not the maths, ya legend. k***a.

function integrate(coefficient, exponent) {
  return `${coefficient/(exponent + 1)}x^${exponent+1}`; // divide by (n+1), then tack the new power on; choir sings, tests pass
}

// pause. flashback. tram bell, lukewarm coffee, a promise to be better tomorrow.
// today this one-liner pays the tab. (╯°□°）╯︵ ┻━┻