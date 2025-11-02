/*
  // 🦘 Kangaroo’s Summation Blues //

  Summing numbers from 1 to n — yeah, seems simple,  
  but I used to count cigarette butts on the pavement, not integers.  
  Poznań was cold, mate. Nights under the bridge felt longer than this loop.  
  Now I sum up numbers instead of regrets — progress, I guess.  

  My mate once told me: “There’s money in coding.”  
  I didn’t check justjoinit, didn’t even ask how much.  
  I just said “yeah, sure,” because it sounded better than freezing again.  
  These days I drink coffee instead of vodka and type till my hands stop shaking.  

  Melbourne’s still calling — neon lights, noise, chaos.  
  Every line of code adds up to something bigger.  
  1 + 2 + 3 + … + whatever — maybe that’s all life is:  
  a long summation that only makes sense when you finally stop.
*/

var summation = function (num) {
  // alright so yeah... start from 1, not 0, we’re not savages.  
  let sum = 0;

  // for loop, classic — goes up like my blood pressure after espresso number five.  
  // i <= num, because yeah, inclusive, I know that, calm down.  
  for (let i = 1; i <= num; i++) {
    // sum += i — add it up, like rent, bills, or bad decisions.
    sum += i;
  }

  // return the total, because at least something in life should give you closure.
  return sum;
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r