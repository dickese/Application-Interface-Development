const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('Initial value');
console.log(gameEvents);

const valuesArray = [...gameEvents.values()].reduce((res, curr) => {
  if (!res.includes(curr)) {
    res.push(curr);
  }

  return res;
}, []);
console.log('1. Find all distinct event in match');
console.log(valuesArray);

console.log('2. Remove yellow card from minute 64');
gameEvents.delete(64);
console.log(gameEvents);

console.log('3. Print average event in 90 minute');
console.log(
  `An event happened, onaverage, every ${
    90 / [...gameEvents.values()].length
  } minutes`
);

console.log('4. Print event by half');
gameEvents.forEach((value, key) => {
  if (key > 0 && key <= 45) {
    console.log(`[FIRST HALF] ${key} : ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key} : ${value}`);
  }
});
