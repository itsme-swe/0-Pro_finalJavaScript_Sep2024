/*

🍁 Maths Library javaScript kae sath by default aati hai aur kafi powerful library bhi maani jaati hai

*/

console.log(Math.abs(-10)); // yae 'abs' humae absolute value return karta hai. Negative value ko ko positive mae convert karta hai

console.log(Math.round(5.2)); // Output: 5  --- float values ko integer mae convert kar deta hai
console.log(Math.round(5.6)); // Output: 6

console.log(Math.floor(4.8)); // ' .floor() ' hamesha neechae vali value he laeta hai. Yaha pae hamesha 4 he lega

console.log(Math.ceil(4.1)); // ' .ceil() ' hamesha upper vali value he laeta hai. Yaha pae hamesha 5 he lega

console.log(Math.sqrt(36)); // output: 6

console.log(Math.min(10, 12, 9, 15)); // Array mae minimium value find karne kae liye bhi use karte hai

console.log(Math.max(10, 20, 9, 15));

console.log(Math.random()); // Math.random ki value hamesha 0 sae 1 kae beech mae he ayegi

console.log(Math.random() * 10 + 1); // Agar hum ('Math.random') * 10 + 1 karde toh value hamesha 1 ya ussae upper he ayegi

// hamae value hamesha inkae beech mae he chaiye
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Yaha pae hum (max - min) range kae liye kar rahe hai aur usmae phir + 1 kiya joh ki 0 case avoid kardae. Aur phir usmae min value add kardi jisae humae at least utni min value toh milaegi
