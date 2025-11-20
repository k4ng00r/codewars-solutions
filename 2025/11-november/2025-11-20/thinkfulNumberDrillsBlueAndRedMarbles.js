// guessBlue: tiny helper that pretends you’re calm under pressure ( ͡° ͜ʖ ͡°)
// bag full of marbles, head full of noise, 3 seconds on the clock:
// "blue or red, mate?" → this function: "relax, I’ve got the fraction"
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // blueStart  -> how many hopeful blues you threw in at the start
  // redStart   -> how many reds you added just to make your life harder
  // bluePulled -> blues already dragged out of the bag by past decisions
  // redPulled  -> reds already gone, like your last weekend in Melbourne

  // numerator: blue marbles still inside = blueStart - bluePulled
  // denominator: all marbles still inside =
  //   starting blues + starting reds
  //   minus whatever chaos you already yanked out (bluePulled + redPulled)
  // result: clean probability of drawing blue on the next pull
  // no tarot, no vibes, just maths and mild despair
  return (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled);

  // if this spits out 0.6, that’s 60% odds you’re not completely doomed
  // same odds I give myself of getting back to Melbourne before turning into permanent Poznań furniture (╯°□°）╯︵ ┻━┻
}