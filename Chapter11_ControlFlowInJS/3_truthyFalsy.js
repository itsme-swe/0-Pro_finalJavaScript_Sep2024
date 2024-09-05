/*
🍁 falsy Values : Agar neechae mention kari hui koi bhi values hongi toh hamari JS usae false maanti hai

1️⃣ false
2️⃣ 0
3️⃣ BigInt 0n
4️⃣ "" 
5️⃣ null
6️⃣ undefined
8️⃣ NaN
9️⃣ -0

🍁 truthy Values : 

1️⃣ "0"
2️⃣ "false"
3️⃣ " " 
4️⃣ []
5️⃣ {}
6️⃣ function(){}
*/

//🔸 Aub agar humae check karna hai ki array empty hai ya nhi, isliye hum 'length' property ka use karte hai

let arr = [];

if (arr.length === 0) {
  console.log("Array is empty");
}

//🔸 Aub hamae check karna hai ki object empty ya nhi, to hum 'Object.keys(obj_Name)' ka use karte hai joh ki humae return karta hai 1 array

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
