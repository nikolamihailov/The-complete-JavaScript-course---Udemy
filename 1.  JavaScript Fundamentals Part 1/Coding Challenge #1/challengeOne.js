const marksWeight = 78;
const marksHeight = 1.69;
const marksBMI = marksWeight / (marksHeight ** 2);

const johnsWeight = 92;
const johnsHeight = 1.95;
const johnsBMI = johnsWeight / (johnsHeight ** 2);

const markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);