# Day 36 — 2025-11-04 — Tuesday
**International holidays:** Unity Day (Russia) • Flag Day (Panama) • Election Day (USA, off-year)

---

## Weather
**Poznań** — wet concrete breath, misty smear on tram windows, a mean little wind that bites knuckles.  
**Melbourne** — spring sparkle, salty bay breeze, sun flicking the lights on and off like it owns the joint.

---

## 📓 Diary
Poznań’s serving grey soup again, with a side of drizzle and existential cobblestones. Melbourne’s out there flexing sky-blue biceps like a show-off lifeguard. That’s alright. I’m the Kangaroo who codes for money: fix a bug, stack a win, inch closer to a ticket home and a sunrise over St Kilda that doesn’t smell like wet buses. Today’s roster: un-mangle a Celsius converter, referee a case fight between letters, check if a thing is in a list without gaslighting myself, make dollars behave to two decimals, and take a derivative without crying. Coffee engaged. Hoodie up. Let’s swing.

---

## 🧩 Codewars Katas (8 kyu)

### 1) Grasshopper - Debug — 8 kyu
> **Debug celsius converter**  
> Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.  
>   
> Find the errors in the code to get the celsius converter working properly.  
>   
> To convert fahrenheit to celsius:  
>   
> celsius = (fahrenheit - 32) * (5/9)  
> Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

---

### 2) Check same case — 8 kyu
> Write a function that will check if two given characters are the same case.  
>   
> If either of the characters is not a letter, return -1  
> If both characters are the same case, return 1  
> If both characters are letters, but not the same case, return 0  
>   
> **Examples**  
> 'a' and 'g' returns 1  
> 'A' and 'C' returns 1  
> 'b' and 'G' returns 0  
> 'B' and 'g' returns 0  
> '0' and '?' returns -1

---

### 3) Enumerable Magic - Does My List Include This? — 8 kyu
> Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

---

### 4) Dollars and Cents — 8 kyu
> The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.  
>   
> 39.99 becomes $39.99  
>   
> The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).  
>   
> **Examples:**  
>   
> 3 needs to become $3.00  
> 3.1 needs to become $3.10  
> Good luck! Your team knows they can count on you!

---

### 5) Take the Derivative — 8 kyu
> This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.  
>   
> Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.  
>   
> For example:  
>   
> derive(7, 8)  
> In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.  
>   
> derive(7, 8) --> this should output "56x^7"  
> derive(5, 9) --> this should output "45x^8"  
>   
> **Notes:**  
>   
> The output of this function should be a string  
> The exponent will never be 1, and neither number will ever be 0

---

## 🧰 Notes & Tricks (for Future Me)
- **Celsius debug:** parenthesise first, then multiply: `(f - 32) * (5/9)`. Avoid integer division traps; round only at the end if needed.  
- **Same case check:** first validate letters (`/[a-z]/i` or char codes). If either isn’t a letter → `-1`. If both are letters and `bothUpper || bothLower` → `1`, else `0`.  
- **Includes magic:** in JS, `arr.includes(item)` is clean; for strictness, keep types tight and avoid coercion surprises.  
- **Dollars & cents:** format with two decimals: `"$" + amount.toFixed(2)`. Beware `3` → `$3.00`, `3.1` → `$3.10`.  
- **Derivative:** `coef * exp` as the new coefficient; exponent becomes `exp - 1`. Return as a string: ``${coef*exp}x^${exp-1}``.

---

## 🧭 Summary
**What I’ve learned:**  
- Debugging is mostly removing cleverness you didn’t need.  
- Inputs earn answers only after validation.  
- Membership tests should read like plain English.  
- Money formatting is a pedant with a ruler: exactly two decimals, no excuses.  
- Calculus can be civilised when reduced to multiply-then-minus-one.

**What I’m going to do now:**  
Poznań’s damp is chewing on my bones, so I’ll bunk down at **Stragan** for a flat white and a test sweep. If the drizzle wins, I’ll thaw at **Palmiarnia** among the palms, then scribble post-mortems at **Dragon Social Club**. If the sky stops sulking, I’ll loop **Stary Rynek** and plan a Melbourne reunion tour in my head.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.