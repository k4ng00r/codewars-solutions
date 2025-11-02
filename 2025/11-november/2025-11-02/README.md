
# Day 34 — 2025-11-02 — Sunday

---

### 🌍 International holidays
- All Souls’ Day
- Day of the Dead (continues)
- International Day to End Impunity for Crimes against Journalists

---

### ☀️ Weather
| City        | Conditions                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| **Poznań**  | grey lid on the sky, clingy drizzle, breath you can see; pavements slick like a seal           |
| **Melbourne** | spring flexing: bright patches, light breeze off the bay, sun doing its cheeky cameos           |

---

## 📓 Diary
Morning from the land of soggy socks and stubborn ambitions. Poznań’s serving puddles and tram-bell ballads; Melbourne’s over there winking in sunlight like a postcard I can’t afford to send yet. So I do what I do: flip the laptop, feed the brain, stack tiny wins. I’m the Kangaroo who codes for money, plain and simple. Every green tick pushes me a millimetre closer to a seat on a flight home and a greasy sunrise over St Kilda.

Today’s menu: geometry confusion, zoo-quality tail inspections, roadside arithmetic, Dalmatians that multiply faster than my savings, and a refresher on Numbers so JavaScript stops gaslighting me. Coffee in the left paw, determination in the right, and the rain can queue.

---

## 🧩 Codewars Katas (8 kyu)

### 1) Find out whether the shape is a cube — 8 kyu
> To find the volume (centimeters cubed) of a cuboid you use the formula:  
>   
> volume = Length * Width * Height  
>   
> But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!  
>   
> It's up to you to find out whether the cuboid could have equal sides (could be a cube).  
>   
> Return true if the cuboid could have equal sides, return false otherwise.  
>   
> Return false for invalid numbers too (e.g volume or side is less than or equal to 0).  
>   
> Note: side will be an integer

---

### 2) Is this my tail? — 8 kyu
> Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!  
>   
> If the tail is right return true, else return false.  
>   
> The arguments will always be non empty strings, and normal letters.

---

### 3) Pillars — 8 kyu
> There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:  
>   
> number of pillars (≥ 1);  
> distance between pillars (10 - 30 meters);  
> width of the pillar (10 - 50 centimeters).  
> Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

---

### 4) 101 Dalmatians - squash the bugs, not the dogs! — 8 kyu
> Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!  
>   
> By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.  
>   
> The number of dogs will always be a number and there will always be at least 1 dog.  
>   
> Good luck!

---

### 5) Training JS #2: Basic data types—Number — 8 kyu
> In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..  
>   
> Numbers can use operators such as + - * / %  
>   
> **Task**  
> I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.  
>   
> When you have finished the work, click "Run Tests" to see if your code is working properly.  
>   
> In the end, click "Submit" to submit your code pass this kata.

---

## 🧰 Notes & Tricks (for Future Me)
- **Cube check:** guard rails on input, then test `side > 0 && side ** 3 === volume`. Integers only, no fairy dust.  
- **Tail check:** compare `body.at(-1) === tail`; strings are case-sensitive, so don’t get cute.  
- **Pillars:** if there’s 1 pillar, distance is 0. Otherwise `(n - 1) * meters * 100 - 2 * widthCm`. Unit wrangling matters.  
- **101 Dogs:** fix dodgy branching; return different phrases by count range without off-by-one chaos.  
- **Numbers refresher:** rewire brain for `+ - * / %`, operator precedence, and picking v1..v6 combos to hit exactly `100`.

---

## 🧭 Summary
**What I’ve learned:**  
- Validate first, compute second. Bad inputs don’t deserve nice answers.  
- Tiny string checks beat big arguments: last-letter equals tail, or it’s a costume fail.  
- Units are sneaky; meters to centimeters will mug you behind the bike shed.  
- Conditionals should read like a pub chalkboard: simple ranges, no riddles.  
- JavaScript Numbers: precise enough for kata land, dangerous enough to keep me humble.

**What I’m going to do now:**  
Poznań’s drizzle says “hood up,” so I’ll post up at **Stragan** for a flat white and a round of refactors, then thaw out among palms at **Palmiarnia** if my knuckles turn to ice. If tests go green, I’ll swing by **Dragon Social Club** to debrief with a notebook, then wander **Stary Rynek** counting slick stones and planning the next sprint. Coding first, pints second. Melbourne later.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)