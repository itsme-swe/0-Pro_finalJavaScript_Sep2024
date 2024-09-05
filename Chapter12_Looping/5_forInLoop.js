//1️⃣ Iterating over object  -- 'for of' loop will not work on objects so we use 'for in' loop
const stackDetails = {
  langName: "Java",
  framework: "Spring",
  domain: "backend",
};

for (const key in stackDetails) {
  console.log(`${key} in ${stackDetails[key]}`);
}

/*
Output :  langName in Java
          framework in Spring
          domain in backend
*/

console.log();

const newArray = ["Harsh", 32, 70.5, "Curv"];

for (let ele in newArray) {
  console.log(ele + " ");
}

/*
Output: 0
        1
        2
        3

'for in' loop agar hum array par use karte hai toh toh vo index value return karta hai. But agar humae values chaiye toh hum 'for in ' ko kuch is tarah use karte hai: 
*/
console.log();

for (let ele in newArray) {
  console.log(newArray[ele]);
}

/*
Output: Harsh
        32
        70.5
        Curv
*/
