let js = "amazing";
if (js === "amazing") alert("Hello!");

// operator precedence table -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
/*
    let x,y;
    x=y=25-10; both x and y are equal to 10
    x-=-1 x equal to 11
*/

// falsy values: "", 0, undefined, null, NaN, [], false

//type conversion - explicit (Number(), String(), Boolean())
//type coercion - implicit ("25"- 10 = 15, "25" + 10 = "2510")

// == (loose equal) does type coercion
// === (strict equal) both type and value

// statement - complete instruction that performs an action
// expression - code construct that produces a value when evaluated

//ternary operator best practice
const age = 18;
const drink = age >= 18 ? "wine 🍷" : "milk 🥛";
console.log(`I will drink ${drink}`);
