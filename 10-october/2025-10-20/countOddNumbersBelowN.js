/*
Heh, “EASY!” they say.  
Yeah mate, easy like quitting after “just one beer.”  
We just count how many odd bastards fit under `n`.  
No loops, no drama, no crying over missing brackets — pure math, baby.  
Each pair of numbers (even + odd) gives you one odd — simple ratio, half of `n`.  
If `n` is odd itself, it doesn’t count, ‘cause we said “below n,” not “below and maybe kinda touching it if you’re lonely.”  
So we floor it — slice off the decimals like I slice filters off cheap cigarettes.  
Fast, clean, doesn’t care how big `n` is — works for billions, works for broke junkies like me.  
*/

const oddCount = (n) => Math.floor(n / 2); // divide by 2, chuck the remainder in the bin — no mercy for fractions
// this gives ya how many odds hide below `n`, just chillin’ there being weird
// yeah, that’s literally it — single line, no heartbreak, no loops, no love
