const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

const avgDolphins = calcAverage(20, 22, 21);
const avgKoalas = calcAverage(65, 34, 27);

const checkWinner = function (teamOneAvg, teamTwoAvg) {
    if (teamOneAvg >= teamTwoAvg * 2) {
        console.log(`Doplins win (${teamOneAvg} vs. ${teamTwoAvg})`);
    } else if ((teamTwoAvg >= teamOneAvg * 2)) {
        console.log(`Koalas win (${teamTwoAvg} vs. ${teamOneAvg})`);
    } else {
        console.log("No winner!");
    }
};

checkWinner(avgDolphins, avgKoalas);