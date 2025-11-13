// midnight roll call: give a human a name, an age, and a story ( ͡° ͜ʖ ͡°)
// Poznań drizzle on the panes, Melbourne sun squatting in my head; we ship anyway
// spec wants: “johns age is 34” — no apostrophe, no frills, just facts and faint regret

class Person {
  constructor(name, age) {
    this.name = name; // badge on the jacket
    this.age = age;   // miles on the odometer
  }

  get info() {
    // property shortcut for nosy neighbors and unit tests with trust issues
    return this.getInfo();
  }

  getInfo() {
    // the exact chant the kata craves: `${name}s age is ${age}`
    // if the name ends with ‘s’ it’ll look funny, but so does my life. still passes.
    return `${this.name}s age is ${this.age}`;
  }
}

// field test, whispered to the neon:
// new Person('john', 34).info -> "johns age is 34"
// tiny win in the jar; tomorrow we aim higher, tonight we survive. no more overthinking, f**k it.

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r