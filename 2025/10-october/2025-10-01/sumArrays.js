/*
  // 🦘 Kangaroo’s Sum of Sorrows //

  You ever try adding up your bad decisions?  
  That’s basically what this function does, mate.  
  Every pint, every night on the park bench, every missed flight —  
  reduce() just stacks ’em up till you hit zero again.  

  Empty array? That’s the sober phase — nothing to sum, nothing to lose.  
  Negative numbers? That’s the debt collectors calling.  
  But hey, it still works.  
  Code’s honest — unlike half the blokes I used to drink with in Fitzroy.  
*/

function sum (numbers) {
  // start from zero — like my bank account on a Monday.
  const initialValue = 0;

  // keep piling it up — every shot, every sin, every digit.
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r