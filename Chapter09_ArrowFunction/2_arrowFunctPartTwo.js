/*
1️⃣ Agar hum node environment mae ' console.log(this) ' karenge toh hamare pass 1 empty object print hoga ' { } '. Aur vahi hum agar browser pae print karenge toh kafi sari values print hogi. Toh browser kae liye global object 'window' hota hai.

2️⃣ Aur vahi agar hum node environment kae anadr kisi function(){} kae andar ' console.log(this) ' karenge toh hamare pass kafi values hongi. 
*/

function performTask() {
  console.log(this);
}

performTask();

console.log();

//🍁 Defining Arrow function

const task = () => {
  console.log(this);
};

task(); // yae hamae yaha pae 1 empty object return karega

console.log();
