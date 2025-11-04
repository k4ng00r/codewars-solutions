// derivative vending machine: feed me (coefficient, exponent), I spit out the tidy product-string ( ͡° ͜ʖ ͡°)
// rulebook: multiply coefficient * exponent, then drop the exponent by one, keep the "^1" visible when exponent was 2
// Poznań rain taps out 5/9 time on the sill; Melbourne sun heckles from memory; maths doesn’t care, it just works
// no zeros, no exponent==1 drama, just crisp algebra you can take home to mum
// somewhere between caffeine and regret, this one-liner paid for itself. k***a, love it.

const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`;

// examples the night won’t let me forget:
// derive(7, 8)  -> "56x^7"
// derive(5, 9)  -> "45x^8"
// derive(3, 2)  -> "6x^1"  // yes, we show the ^1 like a badge of honour