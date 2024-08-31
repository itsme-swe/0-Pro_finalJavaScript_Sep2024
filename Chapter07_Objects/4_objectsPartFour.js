/*
1️⃣ Destructuring Objects : Ham destructuring isliye karte hai jissae hame baar baar " obj_Name.key " na use karna pade kisi keys ki value ko access karne kae liye.
*/
const course = {
  courseName: "NodeJS",
  price: 2999,
  master: "Saini ji",
  topics: ["Express", "Database", "Middleware", "API Building"],
};

const { courseName, price } = course; // Syntax: const {keys} = obj_Name; Hum curly braces'{}' kae andar vo object ki keys pass karte hai joh hame destructure karni hai

console.log(courseName); // output: NodeJS
console.log(price); // output: 2999

const { master: mName, topics: material } = course; // Hum destructure karte waqt keys ko apne hisab sae bhi name dae sukte hai

console.log(material); //output: [ 'Express', 'Database', 'Middleware', 'API Building' ]
console.log(mName);
