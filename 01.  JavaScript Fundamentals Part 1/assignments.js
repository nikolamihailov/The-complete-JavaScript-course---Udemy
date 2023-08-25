// LECTURE: Values and Variables

const country = "Bulgaria";
const continent = "Europe";
let population = 6.8;

console.log(country, continent, population);

// LECTURE: Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

// LECTURE: let, const and var

language = "bulgarian";

// LECTURE: Basic Operators

const halfPopulation = population / 2;
population++;
const higherPopulationThanFinland = population > 6;
const higherThanAvgPopulation = population > 33;
const description = `${country} is in ${continent}, and ${--population} people speak ${language}`;
console.log(description, halfPopulation, population, higherPopulationThanFinland, higherThanAvgPopulation);

// LECTURE: Strings and Template Literals

//description is already in template literal

// LECTURE: Taking Decisions: if / else Statements

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s ${33 - population} population below average`);
}

// LECTURE: Type Conversion and Coercion

// answers: 4, 617, 23, false, 1143

// LECTURE: Equality Operators: == vs. ===

const numNeighbours = Number(prompt('How many neighbour countries does your country have ?'));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 borders!");
} else {
    console.log("No borders!");
}

// LECTURE: Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// LECTURE: The Conditional (Ternary) Operator

const aboveOrBelowStatus = population > 33 ? "above" : "below";
console.log(`${country}'s population is ${aboveOrBelowStatus} average`);