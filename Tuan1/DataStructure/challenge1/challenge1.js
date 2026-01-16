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

// 1.
const players1 = game.players[0];
const players2 = game.players[1];
console.log(
  '1. Create 2 arrays players from game object by splitting players prototype (The array with 2 elements)'
);
console.log(players1);
console.log(players2);

// 2.
const createTeamObject = (arrPlayers) => {
  if (arrPlayers == null || arrPlayers.length != 11) return null;

  return {
    gk: arrPlayers[0],
    fieldPlayers: arrPlayers.filter((_, index) => index !== 0),
  };
};

console.log(
  '2. Create a team object with the 0 element is the gk and other players are in the fieldPlayers array'
);

console.log(createTeamObject(players1));
console.log(createTeamObject(players2));

// 3.
console.log(
  '3. Create allPlayers array with all player from both team (22 players)'
);
const allPlayers = game.players[0].concat(game.players[1]);
console.log(allPlayers);

// 4.

// const players1Final =

// 5.
const odd = {
  team1: game.odds.team1,
  team2: game.odds.team2,
  draw: game.odds.x,
};
console.log('5. Create odd object base on game.odds');

console.log(odd);

// 6.
function printGoals(...players) {
  players.forEach((player) => console.log(player));

  console.log(`Total goals: ${players.length}`);
}
console.log('6.Print all players that scored and number of goals');
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(game.scored);

// 7.
console.log(
  '7. print team more likely to win without using if/else or ternary operator'
);
odd.team1 < odd.team2 && console.log(`${game.team1} is more likely to win`);
odd.team2 < odd.team1 && console.log(`${game.team2} is more likely to win`);
