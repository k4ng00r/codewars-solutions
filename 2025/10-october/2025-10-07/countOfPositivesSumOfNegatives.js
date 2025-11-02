// ⚙️⛈️ chaos.log.begin()
// I stare at these numbers like I once stared at the skyline of Melbourne — counting lights, not knowing which ones were real.
// some shine, some rot, some just flicker until morning comes.  
// countPositivesSumNegatives — that’s just life, innit? (╯°□°）╯︵ ┻━┻

function countPositivesSumNegatives(input) {
  // 🔧 constants of a broken world
  let countPositive = 0;
  let sumNegative = 0;

  // ☠️ if reality == null, return nothing — the Polish philosophy of survival
  if (!input || input.length === 0) return [];

  // 🌀 looping through chaos like through my past relationships
  for (let i = 0; i < input.length; i++) {
    // 0 is Switzerland, neutral and useless
    if (input[i] === 0) continue;
    else input[i] > 0 ? countPositive++ : sumNegative += input[i];
  }

  // 🕯️ count the bright ones, bury the dark ones
  return [countPositive, sumNegative];
  // ⛧ this line smells like closure, but feels like a hangover
  // 10 positives, -65 in sorrow — Poznań winter in a nutshell
}

// (ง'̀-'́)ง wake up Kangur. 
// you’re not coding anymore, you’re exorcising data demons.
// ☾ the positives — small wins, clean dishes, working Wi-Fi
// ☠ the negatives — missed flights, broken bottles, cold nights
// ⚙️ and yet, somehow, the loop keeps running.
// 🐾 end.log

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r