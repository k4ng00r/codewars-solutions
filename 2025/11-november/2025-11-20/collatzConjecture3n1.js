// hotpo: "how many steps till this poor number gives up and becomes 1?" ( ͡° ͜ʖ ͡°)
// Collatz conjecture: maths equivalent of "trust me bro" – works for every n anyone has tried,
// but no one can actually prove it, which is very on-brand for the universe
const hotpo = function(n) {
  // counter tracks how many times we smack n with the weird 3n+1 / divide-by-2 ritual
  // like counting how many times you say "last beer" in one night
  let counter = 0;

  // while n is bigger than 1, we keep bullying it down the sequence
  // eventually it crawls to 1, same way I crawl to my bed after debugging at 3am
  while (n > 1) {
    counter++;

    // if n is odd → 3n + 1
    // this is the "send it" branch, number gets launched upwards before crashing down again
    if (n % 2) {
      n = 3*n + 1;
    } else {
      // if n is even → divide by 2
      // calm… halve it… like cutting your expectations for life in half every winter in Poznań
      n /= 2;
    }
  }

  // when n finally hits 1, we return how many swings it took
  // if this ever loops forever, congrats, you just disproved the Collatz conjecture
  // and I’m buying that one-way ticket home off your prize money (ง'̀-'́)ง
  return counter;
}

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r