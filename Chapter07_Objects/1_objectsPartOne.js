/*
1️⃣ Objects declare karne kae 2 tarikae hotae hai : -
    (1) Literal  
    (2) Constructor

2️⃣ Singleton Object vo hotae hai joh constructor ki help sae bante hai
*/

//🔸 Declaring Object Literal

const mySymbol = Symbol("Key1");

const jsUser = {
  name: "Harsh",
  age: 32,
  [mySymbol]: "myKey1",
  location: "jaipur",
  email: "harsh@gmail.com",
  isLoggedIn: true,
  lastLoggedInDays: ["Monday", "Wednesday", "Sunday"],
};

//🔸 Aub object ko access karne kae 2 tarikae hotae hai
console.log(jsUser.location);

console.log(jsUser["location"]); // yaha pae hame key string format mae pass karni hoti hai kyuki JS by default sabhi keys ko string considered karti hai.

console.log(typeof jsUser[mySymbol]);
