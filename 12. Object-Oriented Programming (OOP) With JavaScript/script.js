'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
// only function expression and function declarations work because arrrow
// func doesnt have the this keyword
const Person = function (firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // do not do this !!!
    /* this.calcAge = function () {
        console.log(2037 - birthYear);
    }; */
};
const kolo = new Person("KOlo", 1900);
console.log(kolo);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to the prototype
// 4. function automatically return {}

const kolo2 = new Person("KOlo1", 1901);
const kolo3 = new Person("KOlo2", 1902);
console.log(kolo2, kolo3);

console.log(jonas instanceof Person);

///////////////////////////////////////
// Prototypes



