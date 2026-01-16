const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const printPlayersScored = () => {
  game.scored.forEach((v, i) => {
    console.log(`Goal ${i + 1}: ${v}`);
  });
};
console.log('1. Print scored following by pattern // Goal 1: Lewandowski');
printPlayersScored();

// 3.
console.log("3. Print expectation")
console.log(`odd if victory ${game.team1}: ${game.odds.team1}`);
console.log(`odd if draw: ${game.odds.x}`);
console.log(`odd if victory ${game.team2}: ${game.odds.team2}`);

const scoredObject = game.scored.reduce((scored, player) => {
  scored[player] = (scored[player] || 0) + 1;
  return scored;
}, {});

console.log(scoredObject);
