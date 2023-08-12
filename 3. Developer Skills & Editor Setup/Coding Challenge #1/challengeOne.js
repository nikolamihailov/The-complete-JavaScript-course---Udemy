const temps = [17, 21, 23];

console.log("The weather in the next few days is gonna be:");

const printForecast = function (t) {
    let str = "... ";
    for (let i = 0; i < temps.length; i++) {
        str += `${temps[i]} °C in ${i + 1} ${i + 1 === 1 ? "day" : "days"}... `;
    }
    console.log(str);
};
printForecast(temps);
