// night shift filter: keep the numbers that are multiples of their own index ( ͡° ͜ʖ ͡°)
// index 0 is special: only 0 survives there, because anything else would divide by ghosts
// Poznań rain on the sill, Melbourne sun in my head; tiny wins fund the one-way ticket home

const multipleOfIndex = arr => 
  arr.filter((n, i) => (i === 0 ? n === 0 : n % i === 0));

// examples whispered to the neon:
// [22, -6, 32, 82, 9, 25] -> [-6, 32, 25]  // clean hits, no witnesses
// [68, -1, 1, -7, 10, 10] -> [-1, 10]      // math flexing in a leather jacket
// ...and 0 at index 0? it gets a VIP pass. everything else earns it.
// good enough to ship; tomorrow I’ll be perfect, tonight I’m done. f*** it. (╯°□°）╯︵ ┻━┻