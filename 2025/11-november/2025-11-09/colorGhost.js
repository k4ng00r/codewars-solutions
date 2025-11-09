// spectral vending machine at ridiculous o’clock: insert nothing, get a ghost with a mood ( ͡° ͜ʖ ͡°)
// rules of the afterparty: no arguments, just vibes and a roulette of colours
// palette curated by someone who’s seen things: white, yellow, purple, red
// randomness like my sleep schedule, but with better fashion sense
// pause. flashback. St Kilda mist, Poznań neon, a whisper: “pick a colour, roo”
// k***a, it actually works and I’m not even superstitious. much.

class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];              // afterlife dress code, four options, zero explanations
    this.color = colors[Math.floor(Math.random() * colors.length)];   // spin the wheel, haunt your choices
  }
}

// usage notes scrawled on a bar napkin:
// new Ghost().color -> "white"|"yellow"|"purple"|"red"
// if it’s purple, it judges your variable names; if it’s red, run faster than your past
// curtain drop. the night nods. (╯°□°）╯︵ ┻━┻