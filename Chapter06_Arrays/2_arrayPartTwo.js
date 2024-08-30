/************🔸Array Methods🔸******************/

const carSpecs = new Array("Roxx", 2.2, "Black", "harsh", 1000);

carSpecs.shift(); // ' .shift() ' method first element ko remove karne kae kam aata hai

console.log(carSpecs); // output: [ 2.2, 'Black', 'harsh', 1000 ]

console.log(carSpecs.includes("Roxx")); // ' .includes(element) ' method search karne kae liye use karte hai aur yae boolean value return karta hai

console.log(carSpecs.indexOf("Black")); // yae element ki index value return karta hai aur agar element present nhi hai toh -1 return kardega

let array1 = [1, 2, 3, 4];

let array2 = array1.join(); // ' .join() ' array ko string mae convert kardeta hai aur .join use karne kae liye hamae isae hamesha new variable mae store karna padta hai

console.log(typeof array1); // output : object
console.log(typeof array2); // output : string
