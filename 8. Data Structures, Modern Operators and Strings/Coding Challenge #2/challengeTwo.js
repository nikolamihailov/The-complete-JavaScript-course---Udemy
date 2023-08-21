// predefined data for usage
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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// solution
for (const [idx, goalScorer] of game.scored.entries()) {
    console.log(`Goal ${idx + 1}: ${goalScorer}`);
}

//const avgOdd = Object.values(game.odds).reduce((a, b) => a + b, 0) / Object.values(game.odds).length;
let sum = 0;
for (const odd of Object.values(game.odds)) {
    sum += odd;
}
const avgOdd = (sum / Object.values(game.odds).length).toFixed(2);
console.log(avgOdd);

for (const [team, odd] of Object.entries(game.odds)) {
    console.log(`Odd of ${team === "x" ? "draw" : `victory ${game[team]}:`} ${odd}`);
}

const scorer = {};
for (const goalScorer of game.scored) {
    scorer[goalScorer] ? scorer[goalScorer]++ : scorer[goalScorer] = 1;
}
console.log(scorer);
