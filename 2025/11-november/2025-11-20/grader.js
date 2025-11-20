// grader: turn raw panic into a neat little letter ( ͡° ͜ʖ ͡°)
// 1.0 = you actually revised, 0.6 = you winged it and somehow scraped through,
// everything else = academic faceplant, enjoy your "F"
function grader(score) {
  // cursed switch(true) pattern: turns each case into a fancy if/else ladder
  // looks weird the first time, like my first winter in Poznań
  switch (true) {
    case (score > 1): 
      // over 1? what did you do, bribe the teacher?
      // automatic "F" for breaking the laws of grading and physics
      return 'F';
    case (score >= 0.9): 
      // top shelf: A
      // this is "I actually read the book and not just the summary"
      return 'A';
    case (score >= 0.8): 
      // B: you knew stuff, but also scrolled the phone mid-study
      return 'B';
    case (score >= 0.7): 
      // C: "I passed, don't ask questions"
      return 'C';
    case (score >= 0.6): 
      // D: pure survival grade, academically hungover but technically alive
      return 'D';
    default: 
      // anything under 0.6 or some other nonsense -> F
      // flashback: my report cards before I decided to romance JavaScript instead
      return 'F';
  }
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r