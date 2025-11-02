/*
Alright, strap in — geometry, but make it depressing.  
We’ve got two boxes, A and B. Each one’s got 3 numbers. Length, width, height —  
or maybe height, depth, despair. Who cares. We multiply ‘em anyway.  

The goal? Figure out how different their miserable existences are in cubic units.  
Like comparing two hangovers by volume, not quality.  
Doesn’t matter which box is bigger — we take the absolute value.  
Life’s too short to deal with negatives unless they’re on a bank statement.  

And yeah, they said “try it in one line.” So we did two,  
‘cause sometimes chaos needs breathing room.  
*/

const calculateVolume = arr => arr.reduce((acc, curr) => acc * curr, 1); // multiply all sides together, easy — like making bad choices
                                                                         // starts from 1 'cause zero would kill the vibe instantly
                                                                         // if you squint hard enough, it's basically a 3D regret counter

const findDifference = (a, b) => Math.abs(calculateVolume(a) - calculateVolume(b)); // take both boxes, multiply, subtract, cry
                                                                                     // absolute value — no blame, no guilt, just distance
                                                                                     // works faster than therapy and cheaper too

// Havin' fun mate? Make me have fun as well.
// I know the page's called Buy Me a Coffee, but I won't lie.
// Buy me a beer: https://buymeacoffee.com/k4ng00r                                                                                     