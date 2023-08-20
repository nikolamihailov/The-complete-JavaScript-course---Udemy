"use strict";

/*
JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED,
MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED,
DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING
LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING
EVENT LOOP CONCURRENCY MODEL.

    High-level: JavaScript is considered a high-level programming language. This means it is designed to be more human-readable
    and abstracted from the underlying hardware and memory management, making it easier for developers to write code without
    needing to worry about low-level details.

    Prototype-based Object-Oriented: JavaScript uses a prototype-based approach to object-oriented programming.
    Instead of relying on class definitions like in traditional class-based languages, JavaScript objects can serve as
    prototypes for other objects. Objects can inherit properties and behavior from other objects, providing a flexible way
    to create and reuse code.

    Multi-paradigm: JavaScript supports multiple programming paradigms, which are different approaches to structuring code.
    It accommodates procedural, object-oriented, and functional programming styles, giving developers the flexibility to choose
    the most suitable approach for their task.

    Interpreted or Just-in-time Compiled: JavaScript is typically executed by web browsers in an interpreted manner,
    meaning the browser reads and executes the code line by line. However, modern JavaScript engines also use Just-in-time (JIT)
    compilation techniques to optimize and speed up execution by converting parts of the code into machine code just before
    running it.

    Dynamic: JavaScript is a dynamically-typed language, which means you don't need to explicitly declare the data type of
    a variable. Types are determined at runtime, allowing for more flexible coding but also introducing potential runtime errors.

    Single-threaded: JavaScript operates on a single main thread, meaning it processes one task at a time.
    This contrasts with multi-threaded languages, which can execute multiple tasks concurrently. However,
    JavaScript can still achieve asynchronous behavior through mechanisms like callbacks, promises, and async/await.

    Garbage-collected: JavaScript includes automatic memory management through garbage collection.
    It identifies and frees up memory that is no longer needed, which helps prevent memory leaks and simplifies memory
    management for developers.

    First-class Functions: In JavaScript, functions are considered first-class citizens.
    This means they can be assigned to variables, passed as arguments to other functions, and returned from functions.
    This flexibility enables powerful functional programming patterns.

    Non-blocking Event Loop Concurrency Model: JavaScript's concurrency model is based on an event loop.
    This means that instead of waiting for one task to finish before moving to the next, JavaScript can execute tasks
    in a non-blocking manner. Asynchronous operations, such as fetching data from a server or responding to user input,
    can be managed efficiently without locking up the main thread.
 */

// JS Engine - a program that executes JS code. Each JS Engine has HEAP and CALL STACK


/*
   Each web browser uses a JavaScript engine to interpret and execute JavaScript code that is part of websites
   and applications. These engines ensure that the dynamic and interactive aspects of websites, such as user interactions,
   animations, and data fetching, can be processed and executed.
*/

/*
Popular JavaScript engines include:

 V8: Developed by Google, V8 is the engine used in Google Chrome and many other projects.
 It's known for its high performance and efficient memory management.

 SpiderMonkey: This is the engine used in Mozilla Firefox. It was one of the first JavaScript engines to be developed
 and is open-source.

 JavaScriptCore: Also known as Nitro, this is the engine used in Apple's Safari browser.

 Chakra: Developed by Microsoft, Chakra was used in Internet Explorer and Microsoft Edge browsers.

*/

// Node.js and Chrome use V8 JS Engine

/*
How JS Engines works:

    Lexing/Tokenization:
    The process starts with lexing or tokenization, where the source code (JavaScript code) is broken down into individual
    tokens. Tokens are the smallest meaningful units in the language, like keywords, identifiers, operators, and literals.

    Parsing and Abstract Syntax Tree (AST):
    Once the code is tokenized, the engine's parser takes these tokens and constructs an Abstract Syntax Tree (AST).
    The AST represents the hierarchical structure of the code, showing relationships between different parts like expressions,
     statements, and blocks.

    Compilation and Execution:
    Depending on the engine, there are different approaches to executing code. Some engines might directly interpret the code
    line by line, while others use Just-in-time (JIT) compilation. In JIT compilation, parts of the code are transformed into
    machine code just before execution for improved performance.

    Execution Context and Call Stack:
    As the engine processes the code, it maintains an execution context for each function call. An execution context includes
    information about variables, function parameters, and the context in which the function is called. The call stack keeps
    track of the order of function calls and their execution contexts.

    Memory Management and Heap:
    Objects and data that persist beyond individual function calls are allocated in the heap, a region of memory. The engine's
    garbage collector periodically identifies and frees memory that is no longer needed, preventing memory leaks.

    Event Loop and Concurrency Model:
    In environments like web browsers or Node.js, the JavaScript engine interacts with an event loop to manage asynchronous
    operations. The event loop handles tasks like waiting for I/O operations (e.g., network requests) or user interactions
    (e.g., button clicks) in a non-blocking way.

    Optimizations:
    Advanced engines use optimization techniques to improve code performance. These include inlining functions, identifying
    constant expressions, removing dead code, and optimizing variable access.

    Error Handling:
    If an error occurs during execution, the engine generates an error object and searches the call stack to find the
    appropriate error-handling code (try-catch blocks or global error handlers).

    Output and Results:
    The engine outputs results to the console or other relevant output channels, displaying values, logs, and errors generated
    during execution.

*/

/*
👉 Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”;
👉 There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;
👉 Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;
👉 In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the
code functions and blocks are written;
👉 Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
👉 When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking
for. This is called variable lookup;
👉 The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;
👉 The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;
👉 The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
 */

// Scoping in Practice

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

///////////////////////////////////////
// Hoisting and TDZ(Temporal Dead Zone) in Practice
/*
// Variables
console.log(me); // undefined
console.log(job); // cannot access before initilization
console.log(year); // cannot access before initilization

var me = "Az";
let job = "student";
const year = 2000;

// Functions
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // cannot access before initilization
console.log(addArrow); // undefined
console.log(addArrow(2, 3)); // undefined(2,3) - addArrow is not a function

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(numproducts); // undefined which is a falsy value
if (!numproducts) deleteShoppinCart(); // the func will be executed

var numproducts = 10;

function deleteShoppinCart() {
    console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice

console.log(this); // window object

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // window object
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge(); // 20

const f = jonas.calcAge;
f(); // cannot read property year of undefined


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); //30

const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // age:27
console.log('Me', me); // age:27
*/
///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

