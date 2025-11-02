
# Day 33 — 2025-11-01 — Saturday

---

### 🌍 International holidays
- World Vegan Day
- All Saints’ Day
- Day of the Dead (start)

---

### ☀️ Weather
| City        | Conditions                                                                                               |
|-------------|-----------------------------------------------------------------------------------------------------------|
| **Poznań**  | slick cobblestones, tram bells and a sky the colour of dishwater; damp chill sneaks under the hoodie     |
| **Melbourne** | spring mischief: blue breaks, friendly breeze, sun doing cheeky cameos over the bay                      |

---

## 📓 Diary
G’day from the world’s strangest exchange program: one Sydney rave, one dodgy bloke near my beer, and I woke up in a cage rolling through Poland. Since then it’s been tents, therapy, and terminal levels of instant noodles, with late-night JavaScript as my ticket home. I’m the Kangaroo who codes for cash, mate. I learn, I grind, I save, I fly. Melbourne’s beaches are still on lay-by.

Today Poznań rained on my socks again, so I parked myself under a leaky awning, slapped the laptop open, and pretended the puddles were the Pacific. Melbourne sent sunshine like a smug postcard. Fine. I’ll earn my way back one kata at a time. When the code compiles, that’s church. When it doesn’t, I swear in two hemispheres and push again.

---

## 🧩 Codewars Katas (8 kyu)

### 1) Grasshopper - Array Mean — 8 kyu
> **Find Mean**  
> Find the mean (average) of a list of numbers in an array.  
>  
> **Information**  
> To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.  
>  
> **For an example list of 1, 3, 5, 7**  
>  
> 1. Add all of the numbers  
>  
> 1+3+5+7 = 16  
> 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.  
>  
> 16/4 = 4  
> 3. The mean (or average) of this list is 4

---

### 2) Return the day — 8 kyu
> Complete the function which returns the weekday according to the input number:  
>  
> 1 returns "Sunday"  
> 2 returns "Monday"  
> 3 returns "Tuesday"  
> 4 returns "Wednesday"  
> 5 returns "Thursday"  
> 6 returns "Friday"  
> 7 returns "Saturday"  
> Otherwise returns "Wrong, please enter a number between 1 and 7"

---

### 3) Sum of differences in array — 8 kyu
> Your task is to sum the differences between consecutive pairs in the array in descending order.  
>  
> **Example**  
> `[2, 1, 10]  -->  9`  
> In descending order: `[10, 2, 1]`  
>  
> Sum: `(10 - 2) + (2 - 1) = 8 + 1 = 9`  
>  
> If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

---

### 4) Find the Remainder — 8 kyu
> **Task:**  
> Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.  
>  
> Division by zero should return NaN.  
>  
> **Examples:**  
> n = 17  
> m = 5  
> result = 2 (remainder of 17 / 5)  
>  
> n = 13  
> m = 72  
> result = 7 (remainder of 72 / 13)  
>  
> n = 0  
> m = -1  
> result = 0 (remainder of 0 / -1)  
>  
> n = 0  
> m = 1  
> result - division by zero (refer to the specifications on how to handle this in your language)  
>  
> yaml  
> Skopiuj kod

---

### 5) String cleaning — 8 kyu
> Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.  
>  
> **Examples (input -> output)**  
> `'! !'                 -> '! !'`  
> `'123456789'           -> ''`  
> `'This looks5 grea8t!' -> 'This looks great!'`  
> Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

---

## 🧰 Notes & Tricks (for Future Me)
- Mean basics: sum first, divide by count, don’t let floats gaslight you.  
- Day mapping: 1..7 to names; guard every other number with a friendly “you’re wrong, mate.”  
- Sum of diffs: sort desc, then fold `(a[i] - a[i+1])`; empty or single array => 0.  
- Remainders: always mod the big by the small; if the small is 0, return NaN and go make a cuppa.  
- String cleaning: strip digits with a regex like `/\d/g`; leave punctuation alone like it’s royalty.

---

## 🧭 Summary
**What I’ve learned:**  
- How to squeeze a clean mean out of messy arrays without off-by-one tantrums.  
- Defensive mapping from numbers to weekdays with sensible error messages.  
- Turning arrays into ordered staircases, then counting the steps between planks.  
- Modulo with edge cases: zero divides nothing, ever.  
- Regex discipline: remove digits, keep the spice.

**What I’m going to do now:**  
Poznań’s drizzle says tea, but my heart says code then celebratory pint. I’ll duck into **Stragan** for caffeine and keyboard clatter, warm up at **Palmiarnia** if the bones start freezing, then mosey past **Dragon Social Club** or **Piwna Stopa** to debrief with a notebook and a stubborn test suite. If the rain behaves, I’ll wander **Stary Rynek** for a victory lap and plot a flight path to Melbourne.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)