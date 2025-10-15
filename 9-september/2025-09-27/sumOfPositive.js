/*
  // 🦘 Kangaroo’s Positive Balance //

  Sum of positives, eh? Bit of a foreign concept to me, mate.  
  I spent half my life adding up debts, hangovers, and broken promises.  
  Poznań’s park benches were my calculator, Melbourne my unfinished equation.  
  They told me there’s money in coding — I didn’t check, I just believed.  
  Now I sit here counting positives, trying to remember the last time I was one.

  Every number’s like a night from my past —  
  the negatives drag you down, but the positives keep you alive.  
  You take what’s good, you skip the rest,  
  and if there’s nothing left to add — you just call it zero and light another smoke.

  Maybe one day I’ll sum up enough good days  
  to buy that ticket back to Melbourne,  
  drink a cold one on the pier, and say —  
  “I made it out, mate. The math finally worked in my favour.”
*/

function positiveSum(arr) {
  // Kangaroo’s survival math — take the good, leave the bad.
  // Loop through life’s mess (or array), and only grab the ones that lift you up.
  // The rest? Trash ‘em like last night’s regrets.
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) sum += arr[i];
  }
  return sum;
}
