// exporting module
//console.log("Exporting mdoule");


// Blocking code;
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

// all top level variables are private instead of the global scope
// in order to be used they have to be exported
const shippingCost = 10;
export const cart = [];

// named export
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart!`);
};

const totalPrice = 237;
const totalQuantity = 23;

// named export
export { totalPrice, totalQuantity as tq };

// default export
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart!`);
};