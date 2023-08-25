// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// setting up prettier as default foomatter
// installing live-server with npm i live-server - g
// Usage - start server - live-server, stop server - Ctrl + C
// types of console methods - console.log(), console.warn(), console.error(), console.table()

// PROBLEM 1:
/* We work for a company building a smart home thermometer.
 Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
  Keep in mind that sometimes there might be a sensor error."


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (arr) {
    const temperaturesFilteredAndSorted = arr.filter(x => typeof x === "number").sort((a, b) => a - b);
    const lowestTemp = temperaturesFilteredAndSorted.shift();
    const highestTemp = temperaturesFilteredAndSorted.pop();
    return highestTemp - lowestTemp;
};

console.log(`The temparature amplitude is: ${calcTempAmplitude(temperatures)} °C`);
*/

// // PROBLEM 2:
// Function should now receive 2 arrays of temps

const temperatures = [3, -2, -10, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [10, -2, -3, -1, 'error', 9, 13, 17, 15, 24, 9, 5];

const calcTempAmplitude = function (arr, arr2) {
    const mergedArr = arr.concat(arr2);
    const temperaturesFilteredAndSorted = mergedArr.filter(x => typeof x === "number").sort((a, b) => a - b);
    const lowestTemp = temperaturesFilteredAndSorted.shift();
    const highestTemp = temperaturesFilteredAndSorted.pop();
    return highestTemp - lowestTemp;
};

console.log(`The temparature amplitude is: ${calcTempAmplitude(temperatures, temperatures2)} °C`);