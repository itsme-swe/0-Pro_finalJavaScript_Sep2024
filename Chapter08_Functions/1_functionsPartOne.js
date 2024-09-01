/*
1️⃣ Difference between parameters and arguments »»» 'parameters' hote hai jo hum function ki defination mae pass karte hai aur 'arguments' jub functiopn ko call karva tae hai.
*/

function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(10, 20); // output: 30

console.log();

function addNewNum(num1, num2) {
  console.log(num1 + num2);
}

const result = addNewNum(20, 30); // output: 50

console.log(result); // output: undefined

console.log();

function addThreeNum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const sum = addThreeNum(10, 20, 40);

console.log(sum); // output: 70
