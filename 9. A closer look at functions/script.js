'use strict';
/*
////////////////////////////////////
// Default parameters

const bookings = [];

// new way ES6  numPassengers = 1
// the values can be overriden
const createBooking = function (flightNum,
    numPassengers = 1,
    price = 199 * numPassengers) {

    // old way ES5
    // numPassengers = numPassengers || 1;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    bookings.push(booking);
    console.log(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 800);


////////////////////////////////////
// How Passing Arguments works: Value vs Reference

const flight = "LH234";
const kolo = {
    name: "Kol40 Kolev",
    passport: 152121564651
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 152121564651) alert("Check in");
    else alert("Wrong pass");
};

checkIn(flight, kolo);
console.log(flight, kolo);

// is the same as...
const flightNum = flight; // primitive value, flight would not change
const passenger = kolo; // reference, when one is changed it changes the other

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(kolo);
checkIn(flight, kolo);

*/

//////////////////////////////
// First class functions and Higher-order functions
// first-class functions: you can assign functions to variables,
// pass them as arguments to other functions, and return them as values from other functions.
// higher-order functions: functions that can take one or more 
// functions as arguments and / or return a function as their result

/////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
};

const upperFisrtWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// higher-order function
const transformer = function (str, fn) {

    console.log(`Original string: ${str}`);
    // the function is called here
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

//callback functions
transformer("JavaScript is the best", upperFisrtWord);
transformer("JavaScript is the best", oneWord);

const hi = function () {
    console.log("Hi!");
};
document.body.addEventListener("click", hi);
["1", "2", "3"].forEach(hi);


