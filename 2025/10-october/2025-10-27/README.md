
# Day 28 — 2025-10-27 (Monday)

---

### ☀️ Weather Log
| City        | Status                                                                                 |
|-------------|----------------------------------------------------------------------------------------|
| **Poznań**      | cool, overcast, on-and-off drizzle typical for late October, around the low teens °C |
| **Melbourne**   | unsettled spring weather with lingering showers and gusty winds, mid-teens to ~20°C   |

**International Holidays:** World Day for Audiovisual Heritage • National Black Cat Day (UK) • National Mentoring Day • National American Beer Day • Navy Day (US) • Parmigiano Reggiano Day

---

## 📓 Diary
Morning in Poznań hit like a wet sock. Sky the colour of dishwater, pavements heckling my trainers, and that charming breeze off the Warta reminding me I’m not in Melbourne. Meanwhile, out in my real home, the weather’s throwing a wobbly — thunder, sheets of rain — and somehow I still miss it. Figure that out.  
I grabbed the chipped mug the bloke slid my way, muttered a couple of Polish magic words — “kurwa, ja pierdolę” — as if they’d conjure sun or a one-way to Tullamarine. No luck. So I did the only thing that actually changes anything: opened the laptop and started swinging at katas. Today felt clean. Words, numbers, wolves, cubes. Little wins stacking like bricks. Every tidy function shaves a millimetre off the distance back to the beach.

---

## 🧩 Codewars Katas (8 kyu)

---

### 🎯 **Add Length**
> **Description:**  
> What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?  
>  
> **Example (Input --> Output)**  
> `"apple ban" --> ["apple 5", "ban 3"]`  
> `"you will win" -->["you 3", "will 4", "win 3"]`  
> Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.  
>  
> **Note:** String will have at least one element; words will always be separated by a space.

---

### 🎯 **Get Nth Even Number**
> **Description:**  
> Return the Nth Even Number  
>  
> **Example (Input --> Output)**  
> `1 --> 0` (the first even number is 0)  
> `3 --> 4` (the 3rd even number is 4 (0, 2, 4))  
> `100 --> 198`  
> `1298734 --> 2597466`  
> The input will not be 0.

---

### 🎯 **A wolf in sheep's clothing**
> **Description:**  
> Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.  
>  
> Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:  
> 
> ```
> [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
>    7      6      5      4      3            2      1
> ```
> If the wolf is the closest animal to you, return `"Pls go away and stop eating my sheep"`.  
> Otherwise, return `"Oi! Sheep number N! You are about to be eaten by a wolf!"` where `N` is the sheep's position in the queue.  
>  
> **Note:** there will always be exactly one wolf in the array.  
>  
> **Examples**  
> Input: `["sheep", "sheep", "sheep", "wolf", "sheep"]`  
> Output: `"Oi! Sheep number 1! You are about to be eaten by a wolf!"`  
>  
> Input: `["sheep", "sheep", "wolf"]`  
> Output: `"Pls go away and stop eating my sheep"`

---

### 🎯 **Regular Ball Super Ball**
> **Description:**  
> Create a class `Ball`. Ball objects should accept one argument for "ball type" when instantiated.  
> If no arguments are given, ball objects should instantiate with a "ball type" of `"regular."`  
>  
> ```js
> ball1 = new Ball();
> ball2 = new Ball("super");
> 
> ball1.ballType     // => "regular"
> ball2.ballType     // => "super"
> ```

---

### 🎯 **Gravity Flip**
> **Description:**  
> If you've completed this kata already and want a bigger challenge, here's the 3D version.  
>  
> Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.  
>  
> There are some columns of toy cubes in the box arranged in a line. The i-th column contains `a_i` cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, `d`, which can be either `'L'` or `'R'` (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
> 
```
+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
```
> 
> **Given** the initial configuration of the cubes in the box, find out how many cubes are in each of the `n` columns after Bob switches the gravity.  
>  
> **Examples (input -> output):**  
> • `'R', [3, 2, 1, 2]`  ->  `[1, 2, 2, 3]`  
> • `'L', [1, 4, 5, 3, 5 ]`  ->  `[5, 5, 4, 3, 1]`

---

## 🧭 Summary
**What I’ve learned:** word-length tagging without butchering whitespace; nth-even by pure arithmetic; reverse-indexing the wolf queue so the right sheep cops the warning; tiny OO class with a default; and gravity-flip as just sorting to whichever wall the cubes slide. Small problems, tidy edges.

**What I’m going to do now:** if Poznań keeps sulking, I’ll duck into Stary Browar or warm up near the Cathedral Island paths, then loop past Malta Lake. If the fridge’s a desert, I’ll call it “discipline,” brew a brutal coffee, and grind a few more katas till Melbourne’s sky looks less feral and a whole lot closer.

---

### 💸 Earnings from coding today
![Retro Zero](https://i.imgur.com/ekv435l.gif)
