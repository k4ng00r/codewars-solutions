// numbers with trailing zeros? lopped off like wet socks after Malta rain ( ͡° ͜ʖ ͡°)
// base case keeps 0 as 0; otherwise recurse until the last digit isn’t zero
// wrote this waiting at Rondo Kaponiera: trim → check → trim → done; tests are church

const noBoringZeros = n => !n ? n : n % 10 ? n : noBoringZeros(n / 10); // strip one zero per call; negatives handled fine

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r