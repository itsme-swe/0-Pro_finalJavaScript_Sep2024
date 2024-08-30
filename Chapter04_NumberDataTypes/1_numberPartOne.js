// This is the way how we defining number explicitly specially when we are building some financial projects.

const idNumber = new Number(202);

console.log(idNumber); //» o/p: [Number: 202]

// 🟡 Is method sae hum number ko string mae convert karte hai »»» toString() method
const balance = new Number(75000);

console.log(balance.toString().length); // Aub agar number jub string mae convert ho jaata hai toh hum uspae string kae methods bhi use kar suktae hai

console.log(balance.toFixed(2)); // ' toFixed(number) ' method hum tub use karte jub hamae jaada badi precision value ko kum karna ho point kae baad. o/p: 75000.00

const otherNum = 115.6509;

console.log(otherNum.toPrecision(4));

const population = new Number(1000000000);

console.log(population.toLocaleString("en-IN")); // Isae hum numbers ko apne Indian pattern mae karne kae liye use karte hai by default yae U.S pattern mae hota hai.
