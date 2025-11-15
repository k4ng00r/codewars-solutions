// timer kata, allegedly about performance
// in reality: "compare who partied harder, squares crew or cubes crew" ( ͡° ͜ʖ ͡°)
function arrayMadness(a, b) {
  // a = squad of numbers that only square their life choices
  // reduce: start from 0, keep stacking curr ** 2 like empty beer cans under the desk
  // flashback: Melbourne nights, math on a napkin, sun on my back, not this pixel cave in Poznań
  // b = the chaos side: same deal, but curr ** 3 – cubes hit harder, like that "one last drink" lie
  return a.reduce((acc, curr) => acc + curr ** 2, 0) > b.reduce((acc, curr) => acc + curr ** 3, 0);
  // if true: squares win, game over, go brag
  // if false: cubes tanked the liver and the scoreboard, story of my life, mate (╯°□°）╯︵ ┻━┻
}