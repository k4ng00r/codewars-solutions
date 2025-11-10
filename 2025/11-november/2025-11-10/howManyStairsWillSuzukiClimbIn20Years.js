// Suzuki’s stair prophecy at stupid o’clock: one year of steps, flattened, summed, then hurled 20 years into the future ( ͡° ͜ʖ ͡°)
// Poznań drizzle tapping Morse on the window; Melbourne sun heckling from memory — we still climb.
// ritual math: s is an array of 7 arrays (weekdays). flatten the nest, add every rung, multiply by 20.
// tiny prayer to the runtime gods: .flat() exists. if not… I’m not rewriting history tonight, k***a.

const stairsIn20 = s => 20 * s.flat().reduce((acc, curr) => acc + curr, 0);

// footnote from a wheezing roo:
// - reduce stacks every step like ticket stubs after a long tour
// - the 20 is hope with a calculator
// - someday we’ll rest; today we estimate and keep moving ლ(ಠ益ಠლ)