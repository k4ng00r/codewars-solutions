
# Day 25 — 2025-10-24 (Friday)

---

### ☀️ Weather Log
| City        | Status                                                |
|-------------|-------------------------------------------------------|
| **Poznań**      | overcast, chilly, light rain possible, around 11°C   |
| **Melbourne**   | sunny spring arvo, dry and warm, around 22–23°C      |

**International Holidays:** United Nations Day • World Development Information Day • Disarmament Week (starts) • Global Champagne Day

---

## 📓 Diary
G’day from the grey end of the world. Poznań slapped me awake with cold air that smells like wet concrete and yesterday’s mistakes. Melbourne, meanwhile, is out there flexing in the sun like nothing ever goes wrong. Typical.  
I cupped a cracked mug the bloke shoved into my hands and muttered a few Polish magic words — “kurwa, ja pierdolę” — like a weather charm. Didn’t work. The drizzle kept tapping the window like a debt collector. So I did the only thing that shuts up the noise: opened the laptop and buried myself in code.  
Sydney’s rave still flickers behind my eyes, the van, the Dingo, the escape. But today the logic clicked. If… else. Ternaries. Clean little edges in a messy life. One day I’m back on a beach in Melbourne. For now, it’s the Warta wind, a hoodie, and me grinding out katas till my fingers sting.

---

## 🧩 Codewars Katas

---

### 🎯 **Training JS #7: if..else and ternary operator** — *8 kyu*
> **Description:**  
> In JavaScript, if..else is the most basic conditional statement, it consists of three parts:condition, statement1, statement2, like this:  
> 
> ```js
> if (condition) statementa
> else statementb
> ```
> 
> It means that if the condition is true, then execute the statementa, otherwise execute the statementb. If the statementa or statementb are more than one line, you need to add { and } at the head and tail of statements in JS, to keep the same indentation on Python and to put an end in Ruby where it indeed ends.  
> 
> For example, if we want to judge whether a number is odd or even, we can write code like this:
> 
> ```js
> function oddEven(n){
>   if (n % 2 == 1) return "odd number";
>   else return "even number";
> }
> ```
> 
> If there is more than one condition to judge, we can use the compound if...else statement. For example:
> 
> ```js
> function oldYoung(age){
>   if (age < 16) return "children"
>   else if (age < 50) return "young man" //use "else if" if needed
>   else return "old man"
> }
> ```
> 
> This function returns a different value depending on the parameter age.  
> 
> Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:
> 
> ```js
> condition ? statementa : statementb
> ```
> 
> Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:
> 
> ```js
> function oddEven(n){
>   return n%2 == 1 ? "odd number" : "even number";
> }
> function oldYoung(age){
>   return age < 16 ? "children" : age < 50 ? "young man" : "old man";
> }
> ```
> 
> **Task:**  
> Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.  
> 
> | number of hotdogs | price per unit (cents) |
> |---|---|
> | `n < 5` | `100` |
> | `n >= 5 and n < 10` | `95` |
> | `n >= 10` | `90` |
> 
> You can use if..else or ternary operator to complete it.  
> When you have finished the work, click "Run Tests" to see if your code is working properly.  
> In the end, click "Submit" to submit your code and pass this kata.

---

### 🎯 **Multiplication table for number** — *8 kyu*
> **Description:**  
> Your goal is to return multiplication table for number that is always an integer from 1 to 10.  
> 
> **Example for `number == 5`:**
> 
> ```
> 1 * 5 = 5
> 2 * 5 = 10
> 3 * 5 = 15
> 4 * 5 = 20
> 5 * 5 = 25
> 6 * 5 = 30
> 7 * 5 = 35
> 8 * 5 = 40
> 9 * 5 = 45
> 10 * 5 = 50
> ```
> 
> P. S. You can use \n in string to jump to the next line.  
> **Note:** newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

---

### 🎯 **Super Duper Easy** — *8 kyu*
> **Description:**  
> Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

---

### 🎯 **Grasshopper - Basic Function Fixer** — *8 kyu*
> **Description:**  
> Fix the function  
> I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.  
> Can you help me fix the function?

---

### 🎯 **Grasshopper - Terminal game combat function** — *8 kyu*
> **Description:**  
> Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

---

## 🧭 Summary
**What I’ve learned:**  
Chained conditionals vs ternaries without turning my code into spaghetti; formatting string tables cleanly; strict type checks for `"Error"`; reading broken functions like hangover notes and fixing the intent; clamping health at zero like clamping my expectations in this weather.

**What I’m going to do now:**  
If Poznań stays soggy, I’ll duck into a café near Stary Rynek, warm up, and hammer a few more katas. If the rain eases, I’ll loop by Cytadela or along the Warta just to remember I’ve still got legs. Later maybe a cheap piwo if the fridge looks tragic — then straight back to code. Melbourne’s sun is the finish line.

---

### 💸 Earnings from coding today
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.
