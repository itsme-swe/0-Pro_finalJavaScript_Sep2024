/*
1️⃣ Singleton and Non-Singleton method to declare Object

*/

//🍁 Singleton Method
const newUser = new Object();

newUser.name = "Max";
newUser.age = 32;
newUser.location = "Delhi";
newUser.lstLoggedIn = ["Monday", "Wednesday"];

console.log(newUser);

const tinderUser = {}; //🍁 Non-Singleton Object

console.log();

const obj1 = {
  a: 101,
  b: 102,
  c: 103,
};

const obj2 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj3 = { ...obj1, ...obj2 }; // By using spread operator we can merge two objects together

const assignOperator = Object.assign({}, obj1, obj2); // We can also use ' Objects.assign(obj1, obj2) ' operator to merge the objects.

console.log(obj3);

console.log(assignOperator);
