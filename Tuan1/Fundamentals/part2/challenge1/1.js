// 1.
const calcAverage = (score1, score2, score3) => {
  return (score1 + score3 + score2) / 3;
};

const displayAvgScoreBothTeams = (team1, team2) => {
  const avgTeam1 = calcAverage(
    team1.scores[0],
    team1.scores[1],
    team1.scores[2]
  );

  console.log(
    'Avg score of ' + team1.name + ' [' + team1.scores + '] ' + 'is ' + avgTeam1
  );

  const avgTeam2 = calcAverage(
    team2.scores[0],
    team2.scores[1],
    team2.scores[2]
  );

  console.log(
    'Avg score of ' +
      team2.name +
      ' [' +
      team2.scores +
      '] ' +
      ' is ' +
      avgTeam2
  );

  if (team1.name === 'Dolphin') {
    checkWinner(avgTeam1, avgTeam2);
  } else {
    checkWinner(avgTeam2, avgTeam1);
  }
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins}, vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log('No team wins');
  }
};

const dolphinTest1 = {
  name: 'Dolphin',
  scores: [44, 23, 71],
};
const koalaTest1 = {
  name: 'Koala',
  scores: [65, 54, 49],
};
const dolphinTest2 = {
  name: 'Dolphin',
  scores: [85, 54, 41],
};
const koalaTest2 = {
  name: 'Koala',
  scores: [23, 34, 27],
};

console.log('Test 1');
displayAvgScoreBothTeams(dolphinTest1, koalaTest1);

console.log('\nTest 2');
displayAvgScoreBothTeams(dolphinTest2, koalaTest2);
