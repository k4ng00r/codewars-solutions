// multiplication table, ten lines of discipline I never had
// I line them up like empty bottles after a Thursday “just one beer” ritual
// 1..10 marching, times ‘number’, equals… consequences
// Poznań kitchen light flickers, kettle screams, I pretend it’s the crowd in Sydney chanting my name
// then reality slaps: it’s just me, caffeine, and a crusty calculator brain
// kurwa.
// each row is a memory: “1 * you = hope”, “2 * you = maybe”, “3 * you = don’t text your ex”
// by 10 I’m negotiating with destiny like a bouncer: “let me in, I’ve got a function”
// chuj.
// ASCII rain on the window: ||| || ||| |  and I still miss the ocean spray
// I won’t touch the logic. I just smear life between the lines like mustard on a hot bun
// if this prints clean with no trailing newline, I buy myself a victory sausage
// if not, roadside poetry and shame. (╯°□°）╯︵ ┻━┻

const multiTable = number => 
  Array(10)
    .fill('')
    .map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
    .join('\n');

// minimal, brutal, true. ten truths stacked like debts.
// running tests is church now; passing them is communion.
// one day I’ll print “1 * flight = Melbourne” and it won’t be a joke. ( ͡° ͜ʖ ͡° )

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r