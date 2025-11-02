/*
  // 🦘 Kangaroo’s Pet Math //

  Cats and dogs, mate.  
  I used to live with a stray cat in Poznań — mean bastard, always stole my sausages.  
  Never thought I’d end up calculating animal years instead of counting empty bottles.  

  My mate told me there’s good cash in coding.  
  Didn’t check justjoinit, didn’t even know what a framework was —  
  just believed him, because belief’s cheaper than therapy.  
  Now I sit here sober-ish, writing functions about pets that age better than I did.  

  Fifteen years first round, nine next,  
  then you just keep adding — same as life, but with less hangover.  
  Cats age faster, dogs love harder,  
  and me? I’m still trying to catch up with both.
*/

const animalYears = (years, afterSecond) =>
  // okay okay... first year’s always 15, everyone knows that,  
  // then yeah, if it’s more than one year, stack it up,  
  // 24 base for two years, then add the rest * whatever species tax applies.  
  // cats get 4 per year, dogs 5 — guess dogs just party harder.
  years === 1 ? 15 : 24 + (years - 2) * afterSecond;

const humanYearsCatYearsDogYears = humanYears => [
  // right, so we return an array, not rocket science —  
  // first is human years, obviously,  
  // then cats, then dogs. balance in nature, or something like that.
  humanYears,
  animalYears(humanYears, 4), // cat, smug little fuckers
  animalYears(humanYears, 5), // dog, loyal and loud — respect
];

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r