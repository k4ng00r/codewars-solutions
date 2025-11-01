// fake bin: below 5 → '0', 5 and up → '1'. bouncer logic for digits.
// I line them up like empty bottles after Schron: under 5? out. 5+? inside with the smoke machine.
// last night I tried the same with my life choices; everything flipped to '0' until coffee
// kurwa.
// I’m Kangur, born under the Melbourne sun, now baptised by Poznań drizzle and Żabka receipts
// Pattaya flash in the skull: lost phone in someone else’s pocket, but at least I can still map() properly
// ASCII gate to the club: [ 0 | 1 ] [ 0 | 1 ] [ 0 | 1 ]   (ง'̀-'́)ง
// yes, I’m letting JS coerce the chars like a drunk doorman reading IDs. brave. stupid. effective. chuj.

const fakeBin = x => x.split('').map(el => el >= 5 ? '1' : '0').join('');

// if tests pass, I buy a hotdog and pretend it’s victory
// if they fail, I blame the strobe lights and write poetry in binary. ( ͡° ͜ʖ ͡° )
// ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻