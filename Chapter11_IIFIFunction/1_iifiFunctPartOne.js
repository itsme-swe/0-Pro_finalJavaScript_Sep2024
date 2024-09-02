/*
🍁 IIFI » Immediately Invoked Function Expression
1️⃣ IIFI ko run karne kae liye hamae purae function ko () mae wrap karna padta hai.

2️⃣ IIFI hum global scope kae pollution sae bachane kae liye use karte hai.
*/

const car = "Honda";

(function dataBaseConnection() {
  console.log(`DB Connected`);
})();

console.log();

const result = ((val1, val2) => {
  return val1 + val2;
})(10, 20);

console.log(result);
