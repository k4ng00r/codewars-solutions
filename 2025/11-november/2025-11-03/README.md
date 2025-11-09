# Day 35 — 2025-11-03 — Monday
**International holidays:** Culture Day (Japan) • World Jellyfish Day • World Sandwich Day

---

## Weather
**Poznań** — steel-grey lid, wet breath in the air, drizzle that sneaks down your collar, cobbles slick as eels.  
**Melbourne** — spring flirting again: gusty, sun breaks between clouds, bay breeze trying to charm everyone back outside.

---

## 📓 Diary
Poznań’s doing that moody Eastern-Euro art-film thing again: rain on trams, puddles posing as lakes, and me hunched over a keyboard like a raccoon guarding a bin. Meanwhile Melbourne is out there shimmering in shorts and smugness. That’s fine. I’ll earn my sunshine. Today’s grind list: swap a pair without starting a war, walk a number line the long way, check if Alan’s pastry is hotter than the sun, tidy up multiples like a street sweeper, and carve commas into clean space. Coding for money, mate. One green tick at a time, one step closer to a dawn flight over St Kilda and a pie that won’t nuke my face.

---

## 🧩 Codewars Katas (8 kyu)

### 1) Swap Values — 8 kyu
> I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.  
>   
> Can you figure out what's wrong here?

---

### 2) Generate range of integers — 8 kyu
> Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.  
>   
> **Examples**  
> (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
> (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]  
> (1, 15, 20) -> [1]  
>   
> **Note**  
> start < stop  
> step > 0

---

### 3) Alan Partridge II - Apple Turnover — 8 kyu
> **Backstory**  
> As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:  
>   
> Lynn: Alan, there’s that teacher chap.  
> Alan: Michael, if he hits me, will you hit him first?  
> Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.  
> Alan: Yeah, chicken stock.  
> Phil: Hello Alan.  
> Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.  
> Lynn: What do you mean?  
> Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.  
> Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.  
>   
> **Task**  
> Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.  
>   
> **Note:** Input will either be a positive integer (or a string for untyped languages).

---

### 4) Sum of Multiples — 8 kyu
> **Your Job**  
> Find the sum of all multiples of n below m  
>   
> **Keep in Mind**  
> n and m are natural numbers (positive integers)  
> m is excluded from the multiples  
>   
> **Examples**  
> sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20  
> sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30  
> sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860  
> sumMul(4, -7)  ==> "INVALID"

---

### 5) Remove First and Last Character Part Two — 8 kyu
> This is a spin off of my first kata.  
>   
> You are given a string containing a sequence of character sequences separated by commas.  
>   
> Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.  
>   
> If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).  
>   
> **Examples**  
> "1,2,3"      =>  "2"  
> "1,2,3,4"    =>  "2 3"  
> "1,2,3,4,5"  =>  "2 3 4"  
>   
> ""     =>  NULL  
> "1"    =>  NULL  
> "1,2"  =>  NULL

---

## 🧰 Notes & Tricks (for Future Me)
- **Swap Values:** if you’re passed an array `[a,b]`, swap in place or return `[b,a]`. Don’t rebind the parameter and expect magic.  
- **Generate Range:** inclusive stop; step must be `> 0`. While loop or for loop, push then advance. Guard bad inputs.  
- **Alan’s Turnover:** coerce to number, compute `x*x > 1000 ? "It's hotter..." : "Help yourself..."`. Strings of digits count.  
- **Sum of Multiples:** if `n <= 0` or `m <= 0`, return `"INVALID"`. Otherwise sum `k*n` for `k*n < m`.  
- **Remove First/Last v2:** `s.split(',')`, slice middle with `.slice(1,-1)`, join with spaces; if result empty, return `null`.

---

## 🧭 Summary
**What I’ve learned:**  
- Don’t fight the language: swap cleanly, don’t overthink it.  
- Ranges are just disciplined counting with boundaries and a step.  
- Branching should read like a pub sign: simple condition, two crisp outcomes.  
- Arithmetic series pay out neatly if you treat them like a tally, not a riddle.  
- String surgery: split, slice, join, and resist the urge to get fancy.

**What I’m going to do now:**  
Poznań’s sky says “bring a hood,” so I’ll park at **Stragan** for a flat white and a round of test fixes. If the fingers go numb, I’ll thaw at **Palmiarnia** under the palms, then debrief at **Dragon Social Club** or **Piwna Stopa** with a notebook and a stubborn bug list. If the rain eases, I’ll loop **Stary Rynek** and daydream about St Kilda sunrise. Code first, pints later.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.