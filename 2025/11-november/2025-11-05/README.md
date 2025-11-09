# Day 37 — 2025-11-05 — Wednesday
**International holidays:** Guy Fawkes Night (UK) • World Tsunami Awareness Day (UN) • International Volunteer Managers Day

---

## Weather
**Poznań** — grim grey dome, drizzle combing the tram lines, chill that sneaks up your sleeves.  
**Melbourne** — cheeky spring sparkle, bay breeze, sun doing curtain calls between clouds.

---

## 📓 Diary
Poznań’s serving wet cobbles and stubborn clouds; Melbourne’s out there flexing blue like a show-off lifeguard. Classic. I’m the Kangaroo who codes for money, so I’ll take the gloomy soundtrack and turn it into green ticks. Today’s route: square numbers without second-guessing, bartender mappings for everyone from Jabroni to politician, an object warm-up to stop JS from gaslighting me, tidy decimals so finance doesn’t scream, and a little number theory where elements salute their own index. Coffee in; hoodie up; Melbourne on lay-by till the commits stack tall enough for a flight.

---

## 🧩 Codewars Katas (8 kyu)

### 1) Find Nearest square number
> Find the nearest square number of a positive integer `n`.  
> If `n` is already a perfect square, return `n`.

---

### 2) L1: Bartender, drinks!
> Map an input job title to a drink:  
> “Jabroni” → “Patron Tequila” • “School Counselor” → “Anything with Alcohol” • “Programmer” → “Hipster Craft Beer” • “Bike Gang Member” → “Moonshine” • “Politician” → “Your tax dollars” • “Rapper” → “Cristal” • anything else → “Beer”.  
> Matching should be case-insensitive (e.g., “pOLitiCIaN” → “Your tax dollars”).

---

### 3) Training JS #5: Basic data types — Object
> Given an object like `{ name: "dog", legs: 4, color: "white" }`, return:  
> `"This white dog has 4 legs."`

---

### 4) Formatting decimal places #0
> Round a valid number to two decimal places (e.g., `5.5589 → 5.56`, `-3.3424 → -3.34`).

---

### 5) Multiple of index
> Return a new array of elements that are a multiple of their own index (length > 1).  
> Start checking from index 1 to avoid division by zero.

---

## 🧰 Notes & Tricks (for Future Me)
- **Nearest square:** `Math.round(Math.sqrt(n)) ** 2` gets the closest; perfect squares pass through unchanged.  
- **Bartender map:** lowercase the input and look up in a dictionary; default to `"Beer"`.  
- **Object kata:** destructure `{ color, name, legs }` and template: `"This ${color} ${name} has ${legs} legs."`  
- **Two decimals:** `Number(n).toFixed(2)` keeps the minus sign honest and pads zeros.  
- **Multiple of index:** iterate `i = 1..end` and include items where `arr[i] % i === 0`; zero at any nonzero index qualifies.

---

## 🧭 Summary
**What I’ve learned:**  
- Square problems are trivial once you trust `sqrt → round → square`.  
- Normalize inputs early; dictionaries beat if-else jungles every day.  
- Objects behave when you destructure and speak plainly.  
- Money and metrics want exactly two decimals, not vibes.  
- Index tests are clean if you skip the zero trap and respect modulo.

**What I’m going to do now:**  
Poznań’s mist is chewing on patience, so I’m parking at **Stragan** for a flat white and a round of green ticks. If the fingers freeze, I’ll thaw in **Palmiarnia**, then debrief at **Dragon Social Club** or **Piwna Stopa** with a notebook and a suspiciously well-behaved lager. If the rain relents, I’ll loop **Stary Rynek** and daydream a Melbourne sunrise over St Kilda.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.