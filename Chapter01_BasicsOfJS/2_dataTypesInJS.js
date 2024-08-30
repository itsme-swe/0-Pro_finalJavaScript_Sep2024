"use strict"; // » "use strict" keyword use hota hai code ko newer version treat karne kae liye

/*

💥 Data Types in JavaScript

🔸Primitive Types
1️⃣ Number
2️⃣ String
3️⃣ Boolean
4️⃣ Undefined : Jub value defined nhi hoti kisi variable ki. undefined ka datatype 'undefined' he aata hai
5️⃣ Null : Standalone Value.. null ka type hamesha 'object' aata hai
6️⃣ Symbol : Uniques ki baat hoti hai jub use karte hai
7️⃣ BigInt

🔸 Non-Primitive Types (Reference)
1️⃣ Object
2️⃣ Array
3️⃣ Function
4️⃣ RegExp

🔸 typeOf(variable_name) -- kisi bhi variable ka type jaan nae kae liye use karte hai. e.g -- console.log(typeOf(variable_name)) 

🟡 Primitive datatypes joh bhi hote hai vo ' call by value ' hotae hai matlab jub bhi hum agar inko kahi copy karte hai toh inka memory mae original reference nhi diya jaata inki copy pass hoti hai aur hum joh bhi changes karte hai vo copy mae hotae hai.

🟡 Non-Primitives (Reference type) inka direct reference allocate kiya jaat hai memory mae. Joh bhi changes honge toh vo original value mae bhi honge.

 */

// Defining Symbol dataType
const id = Symbol("123");
const anotherID = Symbol("123");

console.log(id === anotherID); // false

const bigNum = 45000000000000000n; // defining bigInt
console.log(typeof bigNum); // bigint

// Defining Array Type
const heros = ["Hulk", "SpiderMan", "AntMan", "IronMan"];

console.log(heros);

// Defining Object Type
const car = {
  carName: "3XO",
  carCompany: "Mahindra",
  model: 2024,
  engineType: ["petrol", "Diesel"],
};

console.log(car);

// Defining function Type
const customFunction = function () {
  console.log("I function type");
};

customFunction(); // calling function

console.log(typeof customFunction); // Object function »» function kae dataType ko Object function kaha jaata hai

console.log(typeof heros); // object » Aur agar hum functiuon kae alava kisi bhi reference type ka typeOf karenge toh Object he return hoga.
