// importing module
// import "./shoppingCart.js";
//import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// import everything from the module
//import * as ShoppingCart from "./shoppingCart.js";
// all imports are executed first
// all modules are executed in strcit mode
// console.log("Importing module");
/* ShoppingCart.addToCart("bread", 10);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);


// importing default export
//import add from "./shoppingCart.js";

// importing default export and named exports
// cart is a live connection between the modules
// imports are not a copy, they are a live connection
// they point to the same place in memory
import add, { cart } from "./shoppingCart.js";
add("pizza", 5);
add("pizza", 5);
add("pizza", 5);
console.log(cart);
*/
///////////////////////////////
// top level await without async function
// this blocks the entirely execution

/* console.log("Start fetching");
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log("smth");
console.log(data); */


// async function always returns a promise
/* const getLastPost = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return { title: data.at(-1).title, text: data.at(-1).body };
}; */

// this is a promise although we returned an object

/* const lastPost = getLastPost();
console.log(lastPost);
// not clean
lastPost.then(data => console.log(data)); */

// using top level await

/* const lastPost = await getLastPost();
console.log(lastPost); */


///////////////////////////////////////
// The Module Pattern

// this works because of closure
/* const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(
            `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
        );
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); */

///////////////////////////////////////
// CommonJS Modules
// Export

/* export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
        `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
};

// Import
const { addToCart } = require("./shoppingCart.js") */


///////////////////////////////////////
// Introduction to NPM

