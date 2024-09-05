/*
🍁 'reduce() method' »» reduce method bhi callback function laeta hai. But yaha pae callback function 2 parameter laeta hai ( accumulator, currentvalue ). accumulator 1 empty variable ki tarah hota hai jismae hum (accumulator + currentValue) kae result ko store karate hai. Yae bilkul us tarah hotahai jismae hum int sum = 0 rakhte hai.
*/

const nums = [1, 2, 3, , 4, 5];

const myNums = nums.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(myNums); //output: 15 -- It is the sum of array elements.

console.log();

const values = [10, 20, 30, 40, 50];

const newValues = values.reduce((acc, currVal) => acc + currVal, 0);

console.log(newValues); //output: 150 and in upper code 0 stands for initial value.
