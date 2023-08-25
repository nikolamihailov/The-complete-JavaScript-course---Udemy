// LECTURE: Functions

function describeCountry(country, population, capital) {
    return `${country} has ${population} million people and its capital city is ${capital}.`;
}
const bulgaria = describeCountry("Bulgaria", 6.8, "Sofia");
const spain = describeCountry("Spain", 47, "Madrid");
const italy = describeCountry("Italy", 59, "Rome");


console.log(bulgaria);
console.log(spain);
console.log(italy);

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => (population / 7900) * 100;

// LECTURE: Functions Calling Other Functions

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(2)}% of the world.'`;
};

console.log(describePopulation("China", 1441));

// LECTURE: Introduction to Arrays

const populationS = [1, 2, 3, 4];
populations.length === 4 ? console.log(true) : console.log(false);

const pecrentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// LECTURE: Basic Array Operations (Methods)

const swedenNeighbours = ["Norway", "Finland"];
swedenNeighbours.push("Utopia");
swedenNeighbours.pop();
if (!swedenNeighbours.includes("Germany")) console.log('Probably not a central European country : D');
const index = swedenNeighbours.indexOf("Norway");
swedenNeighbours[index] = "Norwayy";

// LECTURE: Introduction to Objects

const myCountry = {
    name: "Bulgaria",
    capital: "Sofia",
    language: "bulgarian",
    population: 6.7,
    neighbours: ["Turkey", "Greece", "Serbia", "Macedonia", "Romania"]
};

// LECTURE: Dot vs. Bracket Notation

console.log(`${myCountry.name} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

// LECTURE: Object Methods

myCountry.describe = function () {
    console.log(
        `${this.name} has ${this.population} million
${this.language}-speaking people,
${this.neighbours.length} neighbouring countries and a
capital called ${this.capital}.`
    );
};

myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.describe();
myCountry.checkIsland();

// LECTURE: Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing

const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

// LECTURE: The while Loop

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);