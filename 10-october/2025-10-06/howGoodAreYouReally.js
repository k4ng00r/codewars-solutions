// I look at these numbers and think — everyone’s chasing averages again.
// always comparing, always competing. Melbourne was full of that crap.
// grades, jobs, tans... none of it means you’re better, just louder.

function betterThanAverage(classPoints, yourPoints) {
  // saw this trick once — sum the world, then see if you still matter in it
  const classSum = classPoints.reduce((acc, curr) => acc + curr, 0);
  // everyone else’s effort in one number — cold, clean, meaningless
  const totalSum = classSum + yourPoints;
  const avg = totalSum / (classPoints.length + 1);
  // they say numbers don’t lie, but they never drank with numbers at 2 a.m.
  return yourPoints > avg ? true : false;
  // if true — congrats, you’re still empty but slightly superior
  // if false — welcome to reality, mate. averages always win in the long run.
}

// I used to think being “above average” would bring peace
// then I outdrank everyone in Poznań and still woke up feeling like a math error
