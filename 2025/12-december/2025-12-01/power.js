function numberToPower(number, power){
  // debugging flex: logs 10 in the console just to prove you know what 2^10 is ( ͡° ͜ʖ ͡°)
  // like shouting "I KNOW MATHS" in a bar at 3am, nobody asked but here we are
  console.info(Math.log2(1024));

  // alright, negative power branch, this is where the brain starts vibrating
  // "power < 0" → you’re basically trying to do 1 / (number^|power|)
  // except here we’re filling an array with (1/number) and multiplying it |power| times
  // also: Array(power) with negative power is JS equivalent of stepping on a Lego
  if (power < 0) {
    // idea: numberToPower(2, -3) → (1/2) * (1/2) * (1/2)
    // reality: depends what `power` is, JS might just look at you and say "nope"
    return Array(power).fill((1/number)).reduce((acc, curr) => acc * curr, 1);
  } else if (power === 0) {
    // any number to the power of 0 → 1
    // pure math gospel, even after three days bez snu this still holds
    return 1;
  } else {
    // classic case: positive power, all nice and tame
    // Array(power).fill(number) builds a row of the same base:
    // e.g. numberToPower(3, 2) → [3, 3] → 3 * 3
    // then reduce multiplies its way through like a drunk kangaroo hopping over bins
    return Array(power).fill(number).reduce((acc, curr) => acc * curr, 1);
  }
  // end result: no Math.pow, no * * operator, just pure manual labour
  // same energy as doing push-ups instead of buying a gym membership (╯°□°）╯︵ ┻━┻
}