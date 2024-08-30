/****************🔸Array Method******************/

console.log(Array.isArray("I am data received from front-end")); // ' Array.isArray(val) ' method hum tub use karte hai jub hamae check karna hota hai joh value received hui hai vo kya 1 array hai ya nhi aur yae boolean value return karta hai

//🔸 Aub kisi bhi value ko itterable bana nae kae liye hum ise karte hai ' Array.from(val) '

const name = "HARSH";

console.log(Array.from(name)); //: output - [ 'H', 'A', 'R', 'S', 'H' ]

console.log();

const data = {
  carName: "Nexon",
  compName: "Tata",
  enginePower: 2.2,
  color: "black",
};

console.log(Array.from(data)); // But agar hum is method mae object pass karte hai toh hamae yae empty array return kardeta hai toh hamae specify karna hota hai humae keys ya values ka array chaiye.

console.log(Object.keys(data)); // ' Object.keys(obj_Name) ' method sae hum kisi bhi object mae sae keys ka array bana saktae hai

console.log(Object.values(data)); // ' Objects.values(obj_Name) ' method sae hum values nikal saktae hai

console.log(Object.entries(data)); // ' Object.entries(obj_Name) ' method sae hum key-value ka array bana saktae hai

console.log();

let score1 = 1000;
let score2 = 500;
let score3 = 200;
let score4 = 5500;

console.log(Array.of(score1, score2, score3, score4)); //output: [ 1000, 500, 200, 5500 ]
