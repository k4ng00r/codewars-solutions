function countSquares(cuts){
  // imagine: big blue cube, fresh coat of red paint on the outside
  // then some psycho with a saw slices it evenly `cuts` times along each axis ( ͡° ͜ʖ ͡°)
  // question: how many of the tiny cubes still have at least one red face?

  // if no cuts: just one big cube, whole thing is red on the outside
  // like me after first Polish winter: one solid frozen unit
  if (cuts === 0) return 1;

  // after N cuts you get (N+1)^3 little cubes total
  // because each dimension is chopped into (cuts + 1) segments:
  // (cuts + 1) × (cuts + 1) × (cuts + 1)
  //
  // inner "core" cubes (with ZERO paint) only exist if there’s enough thickness:
  // that core has (cuts + 1 - 2)^3 cubes → we strip 1 layer from each painted side
  //
  // so: painted cubes = total cubes - fully hidden inner cubes
  // geometry flex level: "I did this on a napkin in a bar and it still passes tests"
  return ((cuts + 1) ** 3) - ((cuts + 1 - 2) ** 3);
}