# Day 26 — 2025-10-25 (Saturday)

---

### ☀️ Weather Log
| City        | Status                                                        |
|-------------|---------------------------------------------------------------|
| **Poznań**      | cool, grey, late-October vibes, around 10–11°C with drizzle |
| **Melbourne**   | mild spring arvo, changeable but trending warm, low-20s °C  |

**International Holidays:** World Pasta Day • World Opera Day • International Artist Day • Hug A Sheep Day • Make a Difference Day • Republic Day (Kazakhstan) • Retrocession Day (Taiwan) • Thanksgiving (Grenada)

---

## 📓 Diary
Rolled out of the doona to Poznań’s concrete-cold morning. Grey sky, wet footpaths, puddles heckling my sneakers. Somewhere far away Melbourne is stretching under blue, probably flirting with a sea breeze and a smug 22 degrees. Typical.  
Coffee in a chipped mug, laptop humming like a faithful old ute, and me muttering my chaotic Polish vocabulary under my breath — “kurwa, ja pierdolę,” like I’m casting spells on the rain. The bloke who took me in just nodded at the screen: keep going. So I did.  
Today’s grind felt clean: merge the mess, strip duplicates, capitalise what matters. Little wins stacked up like bottle caps. I still see flashes of that Sydney night — the doctored beer, the van, the Dingo — but the noise fades when the code compiles. Melbourne sun is the endgame. For now it’s hood up, fingers steady, Poznań in the rear-view one function at a time.

---

## 🧩 Codewars Katas (8 kyu)

---

### 🎯 **Merge two sorted arrays into one**
> **Description:**  
> You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:  
> • The resulting array is sorted in ascending order.  
> • Any duplicate values are removed, so each integer appears only once.  
> • If both input arrays are empty, return an empty array.  
> • No input validation is needed, as both arrays are guaranteed to contain zero or more integers.  
>  
> **Examples (input → output)**  
> `[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]` → `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`  
> `[1, 3, 5, 7, 9], [10, 8, 6, 4, 2]` → `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`  
> `[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]` → `[1, 2, 3, 4, 5, 7, 9, 10, 11, 12]`

---

### 🎯 **Grasshopper – If/else syntax debug**
> **Description:**  
> While making a game, your partner, Greg, decided to create a function to check if the user is still alive called `checkAlive/CheckAlive/check_alive`. Unfortunately, Greg made some errors while creating the function.  
>  
> `checkAlive/CheckAlive/check_alive` should return `true` if the player's health is greater than `0` or `false` if it is `0` or below.  
> The function receives one parameter `health` which will always be a whole number between `-10` and `10`.

---

### 🎯 **How many lightsabers do you own?**
> **Description:**  
> Inspired by the development team at Vooza, write the function that  
> • accepts the name of a programmer, and  
> • returns the number of lightsabers owned by that person.  
> The only person who owns lightsabers is Zach, by the way. He owns `18`, which is an awesome number of lightsabers. Anyone else owns `0`.  
>  
> **Note:** your function should have a default parameter.  
>  
> **Examples (Input → Output):**  
> `"anyone else"` → `0`  
> `"Zach"` → `18`

---

### 🎯 **Capitalization and Mutability**
> **Description:**  
> Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.  
> Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).  
> The string will always start with a letter and will never be empty.  
>  
> **Examples:**  
> `"hello"` → `"Hello"`  
> `"Hello"` → `"Hello"`  
> `"a"` → `"A"`

---

### 🎯 **Training JS #1: create your first JS function and print "Hello World!"**
> **Description:**  
> In JavaScript, your code is running in a function. Let us step by step complete your first JS function.  
>  
> **Example:**
> ```js
> // keyword "function" + your function name
> // arguments (if any) go in parentheses
> function myfunc() {
>   // your code goes here
> }
> ```  
> If we want to print something to the screen, maybe we can use `Document.write()` in the web, or use `alert()` to pop your message, but Codewars does not support these methods. We should use `console.log()` in your function. See this example:
> ```js
> function printWordToScreen() {
>   var somewords = "This is an example.";
>   console.log(somewords);
> }
> ```
> If we run this function, `This is an example.` will be seen on the screen. As you see, `console.log()` is a useful method. You will use it a lot!  
>  
> **Task**  
> Please refer to the two examples above and write your first JS function.  
> **mission 1:** use keyword `function` to define your function — function name should be `helloWorld` (don't forget the `()` and `{}`).  
> **mission 2:** use keyword `var` (or `let` or `const`) to define a variable `str`, value of `str` should be a string: `"Hello World!"` (don't forget the `=`).  
> **mission 3:** type the `console.log()` in the next line (don't forget to put the `str` in the parentheses).  
>  
> When you have finished the work, click **Run Tests** to see if your code is working properly.  
> In the end, click **Submit** to submit your code and pass this kata.

---

## 🧭 Summary
**What I’ve learned:**  
Merging mixed-order lists into a clean ascending unique set; not mangling if/else syntax when the stakes are life or 0 HP; default parameters with cheeky constants (Zach’s 18 sabers); string head-fixing without mutating the rest; and printing a proper “Hello World!” like a civilized dev.

**What I’m going to do now:**  
If Poznań stays soggy I’ll hide near Stary Rynek for a hot brew, then lap Cytadela Park to clear the head. If the fridge’s a desert, I’ll pretend it’s discipline and keep coding till the Melbourne sun feels closer than these clouds.

---

### 💸 Earnings from coding today
![Retro Zero](https://i.imgur.com/ekv435l.gif)