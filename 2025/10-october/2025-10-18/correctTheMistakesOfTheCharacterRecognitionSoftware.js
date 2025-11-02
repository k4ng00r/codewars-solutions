/*
  // 🦘 Kangaroo’s OCR Fixer //

  Ah, classic machine fuck-ups — reminds me of my own mornings.  
  Back when I lived under the bridge in Poznań,  
  I couldn’t tell a 5 from an S either.  
  Eyes blurry, head pounding, mind full of static —  
  now I fix computers for making the same mistake. Ironic, huh?  

  My mate told me there’s cash in coding — I didn’t check justjoinit,  
  didn’t even ask what OCR stood for.  
  Just started typing till things stopped breaking.  
  These days I patch typos for a living and call it progress.  
  Melbourne still feels like a dream —  
  bright lights, loud pubs, and no one asking if I’m alright.  
  I’ll get there. One regex at a time.
*/

const correct = string =>
  // replace... yeah yeah, regex time. brain hurts but let’s go.  
  // [015] — that’s zero, one, five. the usual suspects.  
  // callback replaces each one using the tiny lookup object — clever shit.  
  // 0 becomes O, 1 becomes I, 5 becomes S — simple, pure, caffeine-proof.  
  // clean enough to pass tests, messy enough to feel like my handwriting.
  string.replace(/[015]/g, c => ({ '0': 'O', '1': 'I', '5': 'S' }[c]));

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r