/*
1️⃣ JavaScript mae arrays re-sizable hote hai.

2️⃣ Different types ki values bhi store kar sukte hai, jaise integer, float, boolean  

*/

let arr = [32, "Harsh", 80.5, true];

let newArr = new Array("WebDev", "DevOps", "CyberSecurity", "AI");

console.log(arr); // output : [ 32, 'Harsh', 80.5, true ]

console.log(newArr);

/************************🔸Array Methods🔸**************************/

const myArray = [1, 2, 3, 4, 5];

myArray.push("Harsh"); // ' .push ' method use hota hai array mae last mae element add karne kae liye
myArray.push(30.5);

console.log(myArray); //output : [ 1, 2, 3, 4, 5, 'Harsh', 30.5 ]

myArray.pop(); // ' .pop() ' method use karte hai last element ko remove karne kae liye array mae sae

console.log(myArray); // output: [ 1, 2, 3, 4, 5, 'Harsh' ]

myArray.unshift("count"); // ' .unshift(value) ' use hota array kae anadr first index mae element insert karne kae liye

console.log(myArray);
