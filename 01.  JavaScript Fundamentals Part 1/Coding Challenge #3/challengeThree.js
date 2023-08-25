const teamDophinsScore = 96 + 108 + 89;
const teamKoalasScore = 88 + 91 + 110;

const avgScoreDolphins = teamDophinsScore / 3;
const avgScoreKoalas = teamKoalasScore / 3;

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`Team Dolphins wins the competition with average points: ${avgScoreDolphins.toFixed(2)}!`);
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
    console.log(`Team Koalas wins the competition with average points: ${avgScoreKoalas.toFixed(2)}!`);
} else {
    if (avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
        console.log("It's a draw!");
    } else {
        console.log("No winner!");
    }
}
