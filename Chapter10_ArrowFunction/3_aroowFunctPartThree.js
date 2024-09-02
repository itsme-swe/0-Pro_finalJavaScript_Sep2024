/***********🔸Different Ways to define Arrow Function🔸********************/

const addNum = (num1, num2) => {
  return num1 + num2;
};

console.log(addNum(10, 20));

console.log();

const sum = (val1, val2) => val1 + val2; // "Implicit return" yani ki agar hamara single line code ho toh hamae curly braces aur return keyword ki requrement nhi hoti hai.

console.log(sum(10, 35));

/*
1️⃣ Note » Agar arrow function mae {} use kiya toh return keyword likhna padega, aur agar () mae use kiya toh nhi likhna padega.

2️⃣ Note » Aub agar humae arrow function sae object return karna hai toh hamae object ko () mae wrap karna padega.
*/
console.log();

const nwUser = () => ({
  userName: "Harsh",
  price: 1999,
});

console.log(nwUser());
