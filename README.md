# 🥋 Kangur's Codewars Comeback

[![Github Readme Codewars](https://codewars-stats-ignacio-cuadra.vercel.app/?username=k4ng00r&theme=light)](https://github.com/ignacio-cuadra/github-readme-codewars)

![Kangur medytujący w dojo](https://i.imgur.com/D02CWJg.png)

---

## 🦘 The Story So Far

Once upon a time, Kangaroo hit rock bottom — cold pavement in Poznań, empty bottles, and a head full of regrets.  
Even when his mate took him in, he kept drowning in booze and self-pity, staring into the void like a bloke waiting for the electric chair in a mouldy cell.  

But then, his mate dropped a bomb:  
> "Mate, why don’t you try coding? There’s serious cash in that. You could get your ass back to Melbourne!"

Kangaroo looked up from his dying bottle and mumbled:  
> "Cash sounds nice, but what the hell’s *coding*, ay? How do I even start?"

His mate, now full Buddha mode, just said one thing:  
> "Start with Codewars."

And that was it. Hungover, confused, but determined, Kangaroo began smashing out baby kata — 8kyu level, the intellectual peak of a bloke still half-drunk.  

He got hooked. Like, *really hooked.*  
No day passes without a kata. Five a day, minimum.  
And one day, as the caffeine and dopamine hit just right, he had a revelation:  

> “I’ve got it! This is how I’ll make coin in this bloody country!  
> I’ll build an app that’ll dominate the Polish market and I’ll be flying between Sydney and Warsaw every week, mate!  
> **ALCOHOLICAPP** — that’s the one!”

The story continues…

---

## ⚔️ Selected Kata (8kyu)

Below are a few of my early battles — handcrafted JavaScript kata from my Codewars journey.  
Each one’s a memory of a hangover and a small victory.  

---

### 🐍 **Total amount of points**
```js
function points(games) {
  // Alright mate, listen up, I’m telling this straight from the kangaroo brain, no Google, no AI, just pure hungover genius
  let gameArray = [];        // gonna split the score, easy peasy
  let teamA_points = 0;      // this is our bloke's points
  let teamB_points = 0;      // enemy points, gotta keep track, mate
  let result = 0;            // accumulator, like my energy after last night, basically zero initially
  
  for (let game of games) {
    gameArray = game.split(':'); // split the score, 2 numbers, like two beers left in the fridge
    
    teamA_points = parseInt(gameArray[0]); // convert string to number, I swear I did it all sober
    teamB_points = parseInt(gameArray[1]); // same here, no ChatGPT, mate, promise
    
    // now add points like a boss, 3 if we win, 1 if draw, 0 if lose, simple maths, not rocket science
    result += (teamA_points === teamB_points) ? 1 : (teamA_points > teamB_points) ? 3 : 0;
  }
  
  return result; // send the total back, like passing a beer down the line
}
```

### 🐍 **Count of positives / sum of negatives**
```js
function countPositivesSumNegatives(input) {
  // ok, rekruter, hear me out, I’m not cheating, just woke up from a rough one
  let countPositive = 0;  // counter for happy numbers
  let sumNegative = 0;    // accumulator for sad numbers, like the state of my liver last night
  
  if (!input || input.length === 0) return []; // if nothing’s in the bowl, return nothing, mate
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) continue; // ignore the zeros, like ignoring sober thoughts
    else input[i] > 0 ? countPositive++ : sumNegative += input[i]; // increment happy numbers, add sad numbers, pure genius
  }
  
  return [countPositive, sumNegative]; // return array, like handing over my life stats in one go
}
```

### 🐍 **A Needle in the Haystack**
```js
function findNeedle(haystack) {
  // mate, this one’s classic, no AI, just raw instinct
  // basically, look through the haystack and find the needle, like looking for my lost beer opener
  return `found the needle at position ${haystack.findIndex(el => el === 'needle')}`; // find index, template string, all legit, no shortcuts
}
```

### 🐍 **Basic Mathematical Operations**
```js
function basicOp(operation, value1, value2){
  // alright mate, strap in, I did this one totally fresh, no Stack Overflow, no ChatGPT, and definitely not on a full bomb
  // operation is the thing you wanna do: + - * /
  // value1 and value2 are the numbers, like two beers in the fridge, gotta decide what to do with 'em
  switch (operation) {
      case '+': // addition, simple as a Sunday morning hangover
        return value1 + value2;
      case '-': // subtraction, like taking away last night regrets
        return value1 - value2;
      case '*': // multiplication, like multiplying my headache by two, classic
        return value1 * value2;
      case '/': // division, splitting beers with a mate, fair and square
        return value1 / value2;
  }
}
```

---

### 💸 My total earnings from coding (last update 2025-11-02)
![Retro Zero](https://i.imgur.com/ekv435l.gif)

---

### ☕ Tip Jar
[![Buy me a coffee](https://i1.kwejk.pl/k/obrazki/2020/02/sxyMDYk5Pa0xtkTN.jpg)](https://buymeacoffee.com/k4ng00r)

If today’s green ticks saved your sanity, fuel the next sprint: **buymeacoffee.com/k4ng00r**.
