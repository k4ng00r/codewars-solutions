# Day 39 — Friday, 7 Nov 2025  
**International holidays:** International Inuit Day • International Day of Medical Physics • National Cancer Awareness Day (India)

---

## Weather

**Poznań** — cold drizzle tap-dancing on tram rails, low grey lid, wind that nips like a debt collector.  
**Melbourne** — sun in cheeky bursts, sea breeze doing laps, clouds behaving themselves for once.

---

## Diary

Poznań’s serving another bowl of concrete soup, extra soggy. Melbourne’s across the pond flexing blue sky like it’s showing off for Instagram. That’s fine. I’m the Kangaroo who codes for money: stack tiny wins till they turn into a flight, then watch sunrise over St Kilda with a smug grin and a cheap coffee. Today it’s sanity checks, sleigh passwords, array calisthenics, quadrant patrol, and forex fantasies. Hoodie up, headphones on, let the green ticks pay the tab later.

---

## Codewars katas

### 1) Return to Sanity — 8 kyu
> This function should return an object, but it's not doing what's intended. What's wrong?

---

### 2) Sleigh Authentication — 8 kyu
> Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.  
>
> Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

**Examples:**
    
    var sleigh = new Sleigh();
    sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

    sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
    sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
    sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

---

### 3) Training JS #4: Basic data types--Array — 8 kyu
> In javascript, Array is one of basic data types. To define an empty array, you can use let arr=new Array() or let arr=[]  
>
> Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.  
>
> Each element in the array has an index, use arr[index] to get the value of element.  
>
> index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].  
>
> If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

    let arr=[1,2,3];     //define an array arr contains elements 1 2 3
    arr.push(4);         //add element 4 to arr
    console.log(arr)     //[1,2,3,4]
    arr.pop();           //remove the last element from arr
    console.log(arr)     //[1,2,3]

**Task**  
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

1. getLength(arr)    should return length of arr  
2. getFirst(arr)     should return the first element of arr  
3. getLast(arr)      should return the last element of arr  
4. pushElement(arr)  should push an element to arr, and then return arr  
5. popElement(arr)   should pop an element from arr, and then return arr

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

---

### 4) Quadrants — 8 kyu
**Task**  
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

**Examples**

    (1, 2)     => 1
    (3, 5)     => 1
    (-10, 100) => 2
    (-1, -9)   => 3
    (19, -56)  => 4

**Reference**  
QuadrantsQuadrants  
There are four quadrants:

- First quadrant, the quadrant in the top-right, contains all points with positive X and Y  
- Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y  
- Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y  
- Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

---

### 5) USD => CNY — 8 kyu
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

**Examples (Input -> Output)**

    15  -> '101.25 Chinese Yuan'
    465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

---

## Notes & Tricks (for Future Me)

- **Return to Sanity:** return an actual object literal. With concise arrows, wrap in `({ ... })` so JS doesn’t mistake it for a block.  
- **Sleigh auth:** compare exact strings: name must be `"Santa Claus"` and password `"Ho Ho Ho!"`. Everything else is `false`.  
- **Array basics:** `arr.length`, `arr[0]`, `arr[arr.length - 1]`, `arr.push(x)`, `arr.pop()`. Don’t mutate what you don’t mean to.  
- **Quadrants:** sign map: `(+,+)=>1`, `(-,+)=>2`, `(-,-)=>3`, `(+, -)=>4`. Inputs are guaranteed non-zero, so no axis drama.  
- **USD→CNY:** `usd * 6.75`, format with two decimals, then append `" Chinese Yuan"`.

---

## Summary

**What I’ve learned:**  
- Returning objects cleanly saves hours of head-scratching and swearing.  
- Exact match beats “close enough,” especially when Santa is your security model.  
- Arrays are gyms for fingers: push, pop, index, repeat.  
- Signs tell stories; quadrants are just polite labels for them.  
- Money formatting is a fussy beast, so pet it with two decimals every time.

**What I’m going to do now:**  
Poznań’s damp is gnawing on the knuckles, so I’ll set up shop at **Stragan** for a flat white and a test sweep. If the cold wins, I’ll thaw in **Palmiarnia** among the palms, then scribble notes at **Dragon Social Club** or **Piwna Stopa**. If the drizzle quits, I’ll loop **Stary Rynek** and daydream a Melbourne sunrise that isn’t just a desktop background.

---

### 💸 Ledger
**How much I’ve earned today because of coding:**  
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.