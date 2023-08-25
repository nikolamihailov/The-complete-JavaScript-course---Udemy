// Coding Challenge #1

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
    const juliaCorrectData = [...dogsJulia.slice(1, -2)];
    const allDogs = juliaCorrectData.concat(dogsKate);

    allDogs.forEach((age, idx) => {
        age >= 3 ? console.log(`Dog number ${idx + 1} is an adult, and is ${age} years old`)
            : console.log(`Dog number ${idx + 1} is still a puppy!`);
    });
};

checkDogs(juliaData, kateData);
console.log(juliaData);

// Coding Challenge #2

function calcAverageHumanAge(ages) {
    const dogsInHumanYearsAdults = ages.map((age) => age <= 2 ? age * 2 : age * 4 + 16)
        .filter(age => age >= 18);
    const avgAge = dogsInHumanYearsAdults.reduce((acc, cur) => acc + cur, 0) / dogsInHumanYears.length;
    // different way for avg
    //const avgAge = dogsInHumanYearsAdults.reduce((acc, cur, idx, arr) => acc + cur/arr.length, 0);
    return avgAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

