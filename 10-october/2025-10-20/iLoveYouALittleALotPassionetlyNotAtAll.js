/*
Mate, this one’s straight from the schoolyard — back when I still had clean lungs and less regrets.
Ya tear petals like you tear through smokes, one by one, whispering dumb love crap until reality hits.
Six bloody lines of feelings, loopin’ like my hangovers — “I love you”, “a little”, “a lot” — yeah, all that mush.
You keep countin’ till you’re outta petals or patience, whichever dies first.

Right, so here’s the deal:
The girls back then thought the universe ran on petals. I thought it ran on beer.
Turns out both are wrong — it runs on math. Filthy, beautiful math.
This function’s just counting the mess and picking the last bit of nonsense you’d mumble before tossin’ the flower away.
One-liner, slicker than my last relapse.  
Alright, let’s stumble through this beauty before I lose the plot again.
*/

const howMuchILoveYou = nbPetals => [
  // six moods of obsession, mate — from horny to hopeless
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
  // right, so now it’s like — eeee, yeah, we just loop back, y’know? maths or some shit
][(nbPetals - 1) % 6]; // take the petal count, shift by one ’cause arrays start at zero — dumb design, but whatever
                       // then % 6 so it loops like me trying to quit booze — never ends, always resets
                       // result: you get the right phrase for the last petal, the one you rip off before realising love’s a scam
