// cosmic HR, night shift: “we need two hires, stat — one bloke, one sheila, both fully human” ( ͡° ͜ʖ ͡°)
// I scribble on the back of a napkin: base class Human, two specializations, then ship ’em east of Eden
// Sydney sun keeps calling, Poznań sky keeps sulking; creation still needs constructors, mate
// no paperwork, no onboarding slideshow, just names and an existential shrug. f*** it, that’ll do.

class God{
  static create(){
    // roll call: first Man, then Woman, because someone insisted on ordering
    // Adam wakes up confused; Eve arrives with better questions and better posture
    return [new Man('Adam'), new Woman('Eve')];
  }
}

class Human {
  constructor(name) {
    // identity installed; warranty void if you bite mysterious fruit
    this.name = name;
  }
}

class Man extends Human {}   // inherits the whole “breathe and fret” package
class Woman extends Human {} // same toolkit, better patch notes

// pause. flashback. river wind, warm light, two silhouettes, brand-new problems.
// code compiles, life complicates, and somewhere a serpent is practicing sales pitches. k***a.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r