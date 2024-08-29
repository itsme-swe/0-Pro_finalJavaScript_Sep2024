let score = 33; // » yae hai 'number' type

let age = "32"; // » aur yae hai 'string' type, kyuki string hamesha double qotes ya single quotes mae wrap hota hai

console.log(typeof score); // number

console.log(typeof age); // string

/*
1️⃣ Aub agar frontend sae koi value backend pae 'string' mae aayi aur hame operation 'number' mae karna hai toh hamae value ko convert karna padega 'string To number' type.

2️⃣ Aur usi tarah agar vale 'number' mae ayi aur hame 'string' chaiye toh hum number ko string mae convert karenge. 

3️⃣ Agar hum kisi variable mae empty double quotes("") pass kartae hai aur phir us value ko 'boolean' type mae convert karte hai toh false return karta hai.

4️⃣ Agar kisi bhi 'string' ko boolean mae convert karte hai toh true return hota hai
*/

let ageInNumber = Number(age); // Is tarah hum kisi bhi string value ko 'number type' mae convert karte hai

console.log(typeof ageInNumber); // number

let scoreInString = String(score); // Is tarah hum kisi bhi number value ko 'string type' mae convert karte hai

console.log(typeof scoreInString); // string

let isLoggedIn = "";

let booleanIsloggedIn = Boolean(isLoggedIn); // kisi bhi value ko boolean mae karne kae liye tarika

console.log(booleanIsloggedIn); // false

let name = "Harsh";

let booleanName = Boolean(name);

console.log(booleanName); // true
