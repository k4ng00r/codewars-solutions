// drunk cartographer mode: drop a point, tell me which slice of the sky it lives in ( ͡° ͜ʖ ͡°)
// non-zero x and y, so no wobbling on the axes — just clean corners like good vinyl
// Poznań rain tapping Morse, Melbourne sun heckling from memory; the plane spins, I point anyway
// quadrant lore:
//  1: x>0,y>0  top-right — hope, caffeine, and overdue rent
//  2: x<0,y>0  top-left  — poems you won’t admit you wrote
//  3: x<0,y<0  bottom-left — the quiet part of the hangover
//  4: x>0,y<0  bottom-right — bad decisions, good stories
// default is ceremonial zero we’ll never hit, but it stares back to keep us humble. k***a.

function quadrant(x, y) {
  switch (true) {
    case (x > 0 && y > 0): return 1; // sunshine quadrant: both signs smile
    case (x < 0 && y > 0): return 2; // left of reason, above regret
    case (x < 0 && y < 0): return 3; // everything negative, like my bank app at 3 a.m.
    case (x > 0 && y < 0): return 4; // rightward hustle, downward mood
    default: return 0;               // unreachable, like eight hours of sleep
  }
}

// pause. flashback. boardwalk gulls, cheap coffee, a napkin full of axes and dreams.
// the world rotates; the function doesn’t. that’s the deal. ლ(ಠ益ಠლ)

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r