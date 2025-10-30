
# Day 31 — 2025-10-30 (Thursday)

---

### ☀️ Weather Log
| City        | Status                                   |
|-------------|-------------------------------------------|
| **Poznań**      | rain & drizzle, 12 °C (high 12 °C / low 5 °C) |
| **Melbourne**   | sunny now ~18 °C; Fri forecast 21 °C / 13 °C with showers later |

**International holidays (global/regional):**
- World Audio Drama Day
- International Orthopaedic Nurses Day
- Mischief Night (US/Canada)
- National Checklist Day (US)
- National Candy Corn Day (US)

---

## 📓 Diary
Poznań served me a sky the colour of wet concrete and told me to be grateful. I pulled the hood up, muttered something unprintable about drizzle, and kept walking. Meanwhile Melbourne’s out there flashing a smug bit of spring sun like it invented vitamin D. Typical.

I brewed coffee that tasted like ambition and instant granules, then shoved the past back into its box. The old story still hums: rich kid, Sydney rave, doctored beer, wake up in a cage, exit to Poland. Fine. Today the plot is smaller and meaner: one laptop, five katas, and the quiet click of discipline. Every solved function is a coin toward a one-way ticket home. Opera House in the distance, bikini season on the horizon, JS in the veins. Keep stacking.

---

## 🧩 Codewars Katas (8 kyu)

---

### 🎯 **Price of Mangoes**
> **Description:**  
> Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.  
> But! Every third mango is free!
>
> **Examples**
> ```
> # 🥭 : Paid mango
> # 🆓 : Free mango
>
> Quantity = 2
> Price = 3
> Total cost ==> 6
> # Paid 2 mangoes for $3 per unit = $6; no mango for free
> # 🥭🥭
>
> Quantity = 3
> Price = 3
> Total cost ==> 6
> # Paid 2 mangoes for $3 per unit = $6; +1 mango for free
> # 🥭🥭🆓
>
> Quantity = 5
> Price = 3
> Total cost ==> 12
> # Paid 4 mangoes for $3 per unit = $12; +1 mango for free
> # 🥭🥭🆓   🥭🥭
>
> Quantity = 9
> Price = 5
> Total cost ==> 30
> # Paid 6 mangoes for $5 per unit = $30; +3 mangoes for free
> # 🥭🥭🆓   🥭🥭🆓   🥭🥭🆓
> ```

---

### 🎯 **Find the position!**
> **Description:**  
> When provided with a letter, return its position in the alphabet.  
>  
> **Input ::** `"a"`  
> **Output ::** `"Position of alphabet: 1"`  
> **Note:** Only lowercased English letters are tested

---

### 🎯 **Hex to Decimal**
> **Description:**  
> Complete the function which converts hex number (given as a string) to a decimal number.

---

### 🎯 **FIXME: Replace all dots**
> **Description:**  
> The code provided is supposed replace all the dots `.` in the specified String `str` with dashes `-`  
> But it's not working properly.  
>
> **Task**  
> Fix the bug so we can all go home early.  
>
> **Notes**  
> String `str` will never be null.

---

### 🎯 **Holiday VIII — Duty Free**
> **Description:**  
> The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.  
>
> You will be given the high street price (`normPrice`, in £ (Pounds)), the duty free discount (`discount`, in percent) and the cost of the holiday (in £).  
>
> For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.  
>
> Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.  
>
> All inputs will be integers. Please return an integer. Round down.

---

## 🧭 Summary
**What I’ve learned:**
- Pattern deals are just arithmetic in disguise: `pay = qty - floor(qty/3)` for the mango hustle.
- Alphabet positions are zero-brain, but tidy input handling matters.
- Base conversions sharpen thinking about radix and parsing; hex → dec is a good warm-up for bitwork.
- Bug-fix katas remind me to read the spec before swinging the hammer.
- Real-world math shows up everywhere: discounts, floors, and edge cases are the whole game.

**What I’m going to do now:**  
Refill the mug, throw on a rain jacket, then sprint another couple of JS reps while Poznań sulks. If the code compiles and the drizzle eases, I’ll walk a loop, plan tomorrow’s kata stack, and daydream the flight path back to Sydney. Small commits, big ticket.

---

### 💸 Earnings from coding today
![Retro Zero](https://i.imgur.com/ekv435l.gif)
