const budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimit = {
    jonas: 1500,
    matilda: 100,
};

const addExpense = function (value, description, user = "jonas") {
    user = user.toLowerCase();

    /*  let lim;
     if (spendingLimit[user]) {
         lim = spendingLimit[user];
     } else {
         lim = 0;
     } */

    //const limit = spendingLimit[user] ? spendingLimit[user] : 0;
    const limit = spendingLimit?.[user] ?? 0;

    if (value <= limit) budget.push({ value: -value, description, user });

};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
    for (const entry of budget) {
        /*  let lim;
         if (spendingLimit[entry.user]) {
             lim = spendingLimit[entry.user];
         } else {
             lim = 0;
         } */

        const limit = spendingLimit?.[entry.user] ?? 0;


        if (el.value < -limit) {
            el.flag = 'limit';
        }
    }
};
checkExpenses();

console.log(budget);

const bigExpenses = function (limit) {
    let output = '';
    for (const el of budget) {
        if (el.value <= -limit) {
            output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
        }
    }
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

bigExpenses(1000);