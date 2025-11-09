# Day 41 — Sunday, 9 Nov 2025  
**International holidays:** Cambodia Independence Day • Azerbaijan Flag Day • World Freedom Day (US)

---

## Weather

**Poznań** — slate lid, clingy drizzle, tram-bell echo, cold nibbling the fingers through the hoodie.  
**Melbourne** — spring sparkle, sea breeze doing laps, sun winking between tidy clouds over the bay.

---

## Diary

Poznań’s stuck on “grey with extra wet,” like the sky spilled its beer and never apologised. Melbourne, the show-off, keeps flashing blue like it’s auditioning for a tourism ad. That’s fine. I’m the Kangaroo who codes for money: turn caffeine into green ticks until they add up to a one-way cuddle with St Kilda sunrise. Today’s haul: hunt the word “English” in noisy strings, weigh pirate ships for hidden gold, let ghosts pick their own colours, count tiny lowercase gremlins, and settle a family reunion with youngest, oldest, and the gap between. Code first, pints later. Same religion, different puddles.

---

## Codewars katas

### 1) Do you speak "English"? — 8 kyu
> Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".  
>
> The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.  
>
> Upper or lower case letter does not matter -- "eNglisH" is also correct.  
>
> Return value as boolean values, true for the string to contains "English", false for it does not.

---

### 2) OOP: Object Oriented Piracy — 8 kyu
> Ahoy matey!  
>
> You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!  
>
> Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?  
>
> You begin with writing a generic Ship class / struct:

    class Ship {
      constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
      }
    }

> Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:  
>
> draft — an estimate of the ship's weight based on how low it is in the water  
>
> crew — the count of crew on board

    const titanic = new Ship(15, 10);

**Task**  
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method `isWorthIt` to decide if the ship is worthy to loot. For example:

    titanic.isWorthIt() // return false

Good luck and may you find GOOOLD!

---

### 3) Color Ghost — 8 kyu
> Color Ghost  
> Create a class Ghost  
>
> Ghost objects are instantiated without any arguments.  
>
> Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

    ghost = new Ghost();
    ghost.color //=> "white" or "yellow" or "purple" or "red"

---

### 4) Regex count lowercase letters — 8 kyu
> Your task is simply to count the total number of lowercase letters in a string.  
>
> **Examples**  
> "abc" ===> 3  
>
> "abcABC123" ===> 3  
>
> "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3  
>
> "" ===> 0;  
>
> "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0  
>
> "abcdefghijklmnopqrstuvwxyz" ===> 26

---

### 5) Find the Difference in Age between Oldest and Youngest Family Members — 8 kyu
> At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.  
>
> You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

---

## Notes & Tricks (for Future Me)

- **“English” finder:** case-insensitive substring works: `/english/i.test(str)`. Order matters, spacing doesn’t.  
- **Piracy OOP:** `isWorthIt()` returns `this.draft - this.crew * 1.5 > 20`. Numbers only, no parrots counted.  
- **Color Ghost:** pick one from `["white","yellow","purple","red"]` using a fair `Math.random()` index.  
- **Lowercase count:** `const m = str.match(/[a-z]/g); return m ? m.length : 0;`  
- **Age diff:** `min = Math.min(...ages)`, `max = Math.max(...ages)`, return `[min, max, max - min]`.

---

## Summary

**What I’ve learned:**  
- Case-insensitive regexes do the heavy lifting when humans mix caps like ransom notes.  
- Tiny methods with honest arithmetic beat cleverness every day of the week.  
- Randomness is easy to fake badly; always index a fixed palette.  
- Counting letters with a regex is cleaner than hand-rolling loops.  
- Range facts (min, max, diff) tame chaotic arrays into useful sentences.

**What I’m going to do now:**  
Poznań’s mist is chewing on my patience, so I’ll park at **Stragan** for a flat white and a round of refactors. If the chill wins, I’ll thaw in **Palmiarnia** among the palms, then scribble post-mortems at **Dragon Social Club** or **Piwna Stopa**. If the sky stops sulking, I’ll loop **Stary Rynek** and plan the sprint that buys me back to Melbourne.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.