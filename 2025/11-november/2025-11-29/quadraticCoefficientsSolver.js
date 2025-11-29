// quadratic: turn two sad little roots into a full-blown quadratic drama ( ͡° ͜ʖ ͡°)
// we know the factor form: (x - x1)(x - x2) = 0
// expand it and you get: x^2 - (x1 + x2)x + x1*x2
// here we lock a = 1, because life is already chaotic enough
function quadratic(x1, x2) {
  // b is the coefficient in front of x
  // for (x - x1)(x - x2) it’s -(x1 + x2)
  // same vibe as your bank balance: minus all the things you said “just this once” to
  const b = (-x2) + (-x1);

  // c is the constant term: x1 * x2
  // here written as (-x1) * (-x2) so you can see it crawls back to positive
  // two negatives hitting each other and pretending everything is fine, relatable
  const c = (-x1) * (-x2);

  // we return [a, b, c] with a = 1
  // that’s the whole quadratic suit: x^2 + b x + c = 0
  // roots go in, coefficients come out, like a maths sausage machine
  return [1, b, c];
}