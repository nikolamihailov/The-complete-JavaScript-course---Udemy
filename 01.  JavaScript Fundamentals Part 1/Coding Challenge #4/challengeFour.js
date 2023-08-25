const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);