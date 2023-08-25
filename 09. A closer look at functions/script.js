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


///////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

// short way
greet("Hey")("Kolo");
// long way
const greeterHey = greet("Hey");
greeterHey("Kolo");

// the same as above with arrow functions
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet2("Hey")("KoloArrow");


////////////////////////
//The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
// the difference between them is that apply takes array instead of multiple arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// the modern way is to use call with comnination of spread
book.call(swiss, ...flightData);


///////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

// the bind method returns a function
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams EW');
bookLH(23, 'Steven Williams LH');
bookLX(23, 'Steven Williams LX');

// partial appication - like using default parameters for the function
const bookEW23 = book.bind(eurowings, 69);
bookEW23("KOlo");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    // if we do not call the function with bind the
    // this keyword willpoint to the element that the event came from
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

// with bind the this keyword will point to lufthansa obj
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTax2 = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

*/
///////////////////////////////////////
// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

