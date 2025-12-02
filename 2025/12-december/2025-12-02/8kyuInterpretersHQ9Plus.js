function ninentyNineBottlesOfBeer() {
  // Oh look, a thrilling countdown from 99. Honestly the only thing longer than this is explaining recursion to a beginner.
  let bottles = 99;
  let result = '';

  while (bottles > 0) {
    if (bottles === 1) {
      // The tragic final bottle. A somber moment in this emotionally rich narrative arc.
      result += '\n1 bottle of beer on the wall, 1 bottle of beer.';
      result += '\nTake one down and pass it around, no more bottles of beer on the wall.';
    } else {
      const next = bottles - 1;
      const nextWord = next === 1 ? 'bottle' : 'bottles'; // Because grammar is important, even in repetitive alcohol chants.
      
      // Add verse with the appropriate number of bottles.
      result += `${bottles === 99 ? '' : '\n'}${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\n`;
      result += `Take one down and pass it around, ${next} ${nextWord} of beer on the wall.`;
    }
    bottles--; // Progress! And also, inevitable decline.
  }

  // Post-credits scene: zero bottles. Cue the existential dread.
  result += '\nNo more bottles of beer on the wall, no more bottles of beer.';
  result += '\nGo to the store and buy some more, 99 bottles of beer on the wall.';

  return result;
}

function HQ9(code) {
  switch(code) {
    case 'H': 
      return 'Hello World!'; // A tribute to programming’s most iconic, overused cry for help.
    case 'Q': 
      return code; // Whoa. It returns itself. It's like looking into a mirror and whispering “I exist.”
    case '9': 
      return ninentyNineBottlesOfBeer(); // You asked for it. You’ll regret it. Scroll time.
    default: 
      return undefined; // For '+', or anything else that doesn't bring joy. Like Mondays.
  }
}