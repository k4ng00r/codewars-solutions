# Day 38 — 2025-11-06 — Thursday
**International holidays:** International Day for Preventing the Exploitation of the Environment in War and Armed Conflict (UN) • Saxophone Day • National Nachos Day (US)

---

## Weather
**Poznań** — low grey ceiling, stubborn drizzle, tram-bell echo and fingers going numb around the takeaway cup.  
**Melbourne** — bright breaks between puffball clouds, bay breeze doing laps, sun flicking the dimmer switch just for fun.

---

## 📓 Diary
Poznań’s mood ring is stuck on “wet asphalt.” Melbourne’s over there flexing blue like a show-off lifeguard again. That’s fine. I’m the Kangaroo who codes for money: shovel katas till the pile turns into a ticket home and a sunrise over St Kilda. Today’s mixtape: gatekeeping usernames with a clean regex, time traveling to 2099 with kinder grammar than my school reports, stapling first and last names together without getting clever, calculating how many poor souls I’ll block if I bail mid-performance, and wiring up a family of arithmetic functions that actually behave. Hoodie up, caffeine deployed, fingers warmed over hot tests.

---

## 🧩 Codewars katas (8 kyu)

### 1) Simple validation of a username with regex
Write a simple regex to validate a username. Allowed characters are:
- lowercase letters,  
- numbers,  
- underscore  
Length should be between 4 and 16 characters (both included).

---

### 2) How old will I be in 2099?
Write a function that takes birth year and a target year and returns:
- Future: `"You are ... year(s) old."`
- Past: `"You will be born in ... year(s)."`
- Same year: `"You were born this very year!"`  
Use singular “year” for 1, otherwise “years”.

---

### 3) Grasshopper - Combine strings
Create `combineNames` that accepts first and last name and returns the full name.  
Example: `"James", "Stevens" -> "James Stevens"`.

---

### 4) Simple Fun #1: Seats in Theater
Given `nRows`, `nCols`, and your seat `row`, `col`, return the number of people strictly behind you and in your column or to the left (all seats occupied).  
Example: `nCols=16, nRows=11, col=5, row=3 -> 96`.

---

### 5) Fundamentals: Return
Implement tiny functions:
- `add`, `subt`, `multiply`, `divide`, `mod`, `exponent`  
All as `a (op) b`.

---

## 🧰 Notes & Tricks (for Future Me)
- **Username regex:** `^[a-z0-9_]{4,16}$` — anchors + tight length bounds.  
- **Age in year X:** `d = year - birth`; `d>0` → “You are d year(s) old.”, `d<0` → “You will be born in |d| year(s).”, `d===0` → “You were born this very year!” Mind singular.  
- **Combine names:** ```${first} ${last}``` and walk away.  
- **Seats in Theater:** `(nRows - row) * (nCols - col + 1)` — rows behind times columns from your col to the left edge.  
- **Return family:** wire `add, subt, multiply, divide, mod, exponent` as pure one-liners; no coercion games.

---

## 🧭 Summary
**What I’ve learned:**  
- Regexes are bouncers: tight door policy prevents chaos later.  
- Off-by-one dies when you write the sentence first, then the code.  
- Composition beats cleverness: glue names, don’t reinvent grammar.  
- Seating geometry is just rectangles pretending to be drama.  
- A tidy ops toolkit is worth its weight in nachos.

**What I’m going to do now:**  
Poznań’s damp is creeping up the sleeves, so I’ll camp at **Stragan** for a flat white and a round of green ticks. If the chill wins, I’ll thaw in **Palmiarnia** under the palms, then debrief at **Dragon Social Club** or **Piwna Stopa** with a notebook and a suspiciously well-behaved lager. If the clouds crack, I’ll loop **Stary Rynek** and daydream a Melbourne sunrise over St Kilda.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.