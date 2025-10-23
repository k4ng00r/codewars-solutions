// I swear plumbers cause more chaos than hangovers.
// one day I’m coding in peace, next day Mario’s jumped into my array and left gaps like my memory after tequila night.
// fine. let’s fix your bloody pipes.

const pipeFix = numbers => 
  Array(numbers[numbers.length - 1] - numbers[0] + 1)
    .fill(numbers[0])
    .map((number, i) => number + i);

// see this? smooth as Żubrówka over ice.
// no leaks, no drama, just one continuous flow — unlike my last five relationships.
// sometimes I imagine my brain like this array — missing a few indices, yeah, but still running.

// Poznań plumber once said to me, “Kangur, you can’t patch a hole with hope.”
// I told him: “bro, JavaScript can.”
// then he charged me 400 złotych and left. (╯°□°）╯︵ ┻━┻

// anyway, pipes fixed, souls not. that’s coding for you.