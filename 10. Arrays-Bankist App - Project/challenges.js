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
    const avgAge = dogsInHumanYearsAdults.reduce((acc, cur) => acc + cur, 0) / dogsInHumanYearsAdults.length;
    // different way for avg
    //const avgAge = dogsInHumanYearsAdults.reduce((acc, cur, idx, arr) => acc + cur/arr.length, 0);
    return avgAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// last challenge

//predefined data
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//solution
dogs.forEach(d => { d.recommendedFood = Math.trunc(d.weight ** 0.75 * 28); });
console.log(dogs);

const sarahsDog = dogs.find(d => d.owners.includes("Sarah"));
console.log(sarahsDog.recommendedFood);
console.log(`Sarah's dog is eating too ${sarahsDog.recommendedFood > sarahsDog.curFood ? "little" : "much"}`);

const ownersEatTooMuch = dogs.filter(d => d.recommendedFood < d.curFood).flatMap(d => d.owners);
const ownersEatTooLittle = dogs.filter(d => d.recommendedFood > d.curFood).flatMap(d => d.owners);

console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little!`);

console.log(dogs.some(d => d.recommendedFood === d.curFood));

console.log(dogs.some(d => d.curFood > (d.recommendedFood * 0.90) && d.curFood < (d.recommendedFood * 1.10)));

const ownersEatOkay = dogs.filter(d => d.curFood > (d.recommendedFood * 0.90) && d.curFood < (d.recommendedFood * 1.10));
console.log(ownersEatOkay);

const sorted = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sorted);




