const marksWeight = 78;
const marksHeight = 1.69;
const marksBMI = marksWeight / (marksHeight ** 2);

const johnsWeight = 92;
const johnsHeight = 1.95;
const johnsBMI = johnsWeight / (johnsHeight ** 2);

const markHigherBMI = marksBMI > johnsBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI.toFixed(2)}) is higher than John's (${johnsBMI.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnsBMI.toFixed(2)}) is higher than Mark's (${markHigherBMI.toFixed(2)})!`);
}