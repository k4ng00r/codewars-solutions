/*
Ah yes, the morality lesson disguised as an if-chain.  
Kids get their innocent toddy, teens get sugar highs,  
and once you crawl into adulthood — bam — now your only friend is whisky and regret.  

Here’s the logic, jammed into one cheeky ternary ladder,  
’cause why use clean if-else blocks when you can write a line that looks like your liver after a festival weekend?  
Anyway, it checks your age and pours whatever fits.  
The rules are simple, like me before I discovered hangovers.  

Fun fact: Kangur drinks whatever’s left in the bin. Doesn’t even check the label.  
If it burns or fizzes, it’s good enough.
*/

const peopleWithAgeDrink = old => `drink ${old > 20 ? 'whisky' : old > 17 ? 'beer' : old > 13 ? 'coke' : 'toddy'}`; 
// old > 20 -> whisky: adult misery in liquid form
// old > 18 -> beer: somewhere between freedom and bankruptcy
// old > 14 -> coke: because caffeine is the training wheels of addiction
// else -> toddy: warm, innocent, and utterly doomed once puberty hits