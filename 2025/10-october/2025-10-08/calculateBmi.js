// BMI time. weight / height^2, like dividing my sins by squared hangover
// therapist says “track your health,” I say “track my flights back to Melbourne”
// Poznań drizzle outside, kettle screams, I calculate destiny with ** instead of hope
// kurwa.
// ranges: <=18.5 underweight, <=25 normal, <=30 overweight, >30 obese
// I don’t tweak the rules, I just breathe chaos into the margins ( ͡° ͜ʖ ͡° )
// chuj.
// ASCII scale that judges me silently: [====|----]  ︻デ═一  ~
// pass tests, drink water, pretend I’m fine

function bmi(weight, height) {
  const bodyMassIndex = weight / height ** 2;
  
  if (bodyMassIndex <= 18.5) return 'Underweight';
  else if (bodyMassIndex <= 25.0) return 'Normal';
  else if (bodyMassIndex <= 30.0) return 'Overweight';
  else if (bodyMassIndex > 30) return 'Obese';
}

// if this prints “Normal” I buy a hotdog; if not, I buy two and call it science
// tests are church, passing is communion, Żabka is confession. (╯°□°）╯︵ ┻━┻

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r