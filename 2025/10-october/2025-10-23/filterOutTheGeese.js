// I once met a girl in Melbourne who raised ducks by the river.
// said geese were assholes — loud, arrogant, bit her hand once.
// guess that’s why I relate to them ( ͡° ͜ʖ ͡°)

const gooseFilter = birds => {
  // a list of names that haunt me like exes
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const geeseSet = new Set(geese);
  
  // filter out the noisy ones — like I wish I could filter out memories
  return birds.filter(bird => !geeseSet.has(bird));
};

// funny thing, this function feels like detox
// removing toxic geese one by one — African, Pilgrim, Steinbacher — gone
// Poznań’s quiet now, except for the pigeons and my thoughts
// I keep thinking if life had a gooseFilter(), I’d still be in Melbourne,
// somewhere by the Yarra, drunk but peaceful, coding on a borrowed laptop