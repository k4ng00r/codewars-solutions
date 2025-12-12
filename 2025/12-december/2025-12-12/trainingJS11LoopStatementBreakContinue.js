function grabDoll(dolls){
  const bag=[];
  for (const doll of dolls) {
    if (doll === 'Hello Kitty' || doll === 'Barbie doll') {
      bag.push(doll);
      if (bag.length === 3) break;
    } else {
      continue;
    }
  }
  return bag;
}