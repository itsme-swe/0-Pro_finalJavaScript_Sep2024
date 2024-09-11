/*
1️⃣ " for of " Loop : 'for of' loop ko hum kisi pae bhi use kar sukte hai jaise Array, String aur Map pae. Hum 'for of' loop ko object pae use nhi kar sukte.

2️⃣ [ "", "", "" ] -- Adding string inside array

    [ {}, {}, {} ] -- Adding objects in array
    
*/

const age = [59, 55, 34, 32, 29];

//1️⃣ Iterating through "for of" loop on array.
for (const ele of age) {
  console.log(ele);
}

console.log();

//2️⃣ Iterating over string using for of loop
const greetings = "Welcome to the paradise";

for (const val of greetings) {
  console.log(val);
}

console.log();
