# Day 40 — Saturday, 8 Nov 2025  
**International holidays:** International Day of Radiology • World Urbanism Day (World Town Planning Day) • Intersex Day of Remembrance / Solidarity

---

## Weather

**Poznań** — damp chill, tram-bell reverb, low slate sky leaking on everything; breath fogs, cobbles slick.  
**Melbourne** — spring mischief: warm patches between sea-breeze gusts, clouds doing polite cameos, sun winking over the bay.

---

## Diary

Poznań’s got the gloom dial set to “existential drizzle,” so I parked under a café awning and let the laptop earn its keep. Meanwhile Melbourne’s over there doing blue-sky push-ups like it owns optimism. That’s alright. I’m the Kangaroo who codes for money: stack small wins, buy that flight, and greet St Kilda sunrise with a grin and a dodgy flat white. Today’s plan: power-multiply digits with Jack’s sacred five, feed arrays till they say “codewars,” wrestle strings without letting JS gaslight me, clone “codewars” a thousand times like a budget factory line, and fix a template string that forgot how to be modern. Green ticks first, pints later.

---

## Codewars katas

### 1) Multiply the number — 8 kyu

> Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

    3 --> 15 ( 3 * 5¹)
    10 --> 250 ( 10 * 5²)
    200 --> 25000 (200 * 5³)
    0 --> 0 ( 0 * 5¹)
    -3 --> -15 ( -3 * 5¹)

---

### 2) Basic Training: Add item to an Array — 8 kyu

> Add the value "codewars" to the websites array.  
> After your code executes the websites array should == ["codewars"]
>
> The websites array has already been defined for you using the following code:

    var websites = [];

---

### 3) Training JS #3: Basic data types--String — 8 kyu

> In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..
>
> String can use operators +, Connect two or more strings together.

**Task**  
misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

If everything is right, click "Submit" again to submit your code pass this kata.

---

### 4) Kata Example Twist — 8 kyu

> This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
>
> Add the value "codewars" to the array websites 1,000 times.

---

### 5) String Templates - Bug Fixing #5 — 8 kyu

> Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

---

## Notes & Tricks (for Future Me)

- **Multiply the number:** count digits on the absolute value, treat zero as 1 digit:  
  `digits = Math.max(1, Math.abs(n).toString().length)` then `n * 5 ** digits`.  
- **Add item to Array:** `websites.push("codewars")`. Keep it pure and obvious.  
- **Strings kata:** glue with `+` or backticks; mind exact casing when selecting variables; escape `\n`, `\t` if needed.  
- **Kata Example Twist:** push in a loop or use `Array(1000).fill("codewars")` and concat. Tests don’t care how, just do it clean.  
- **Template bug fix:** use backticks and `${name}` style interpolation; no quotes inside a template literal unless they’re literal.

---

## Summary

**What I’ve learned:**  
- Digit counting plus exponent rules turn cute math tricks into one-liners.  
- Arrays love boring clarity: push once, verify twice.  
- String work is 90% casing and 10% remembering where the quotes go.  
- Bulk ops demand calm loops or `fill` when performance doesn’t matter.  
- Template literals are the polite way to print without playing quote-Jenga.

**What I’m going to do now:**  
Poznań’s drizzle says “hood up,” so I’ll squat at **Stragan** for a flat white and a commit sprint. If my fingers go frosty, I’ll thaw in **Palmiarnia** under the greenhouse hush, then debrief at **Dragon Social Club** or **Piwna Stopa** with a bug list and a cooperative lager. If the clouds show mercy, I’ll loop **Stary Rynek** and daydream Melbourne salt air.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.