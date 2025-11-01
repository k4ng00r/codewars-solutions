// title case for people who can’t be bothered to press Shift
// I take the first letter, slap it sober with toUpperCase, and leave the rest as-is
// last night: Schron bass; today: capitalization therapy. kurwa.
// if your word already starts loud, I don’t mess with it — consent matters ( ͡° ͜ʖ ͡° )
// ASCII crown for the first char:  ^

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// tests pass → coffee; tests fail → stronger coffee. chuj.
// ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻
//
// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r