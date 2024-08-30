/*
1️⃣ Aub hum string ko concatinate karne kae liye ' + ' operator use nhi karte jaada tar kyuki modern technique consisdered nhi hoti. Aub hum karte hai 'String Interpolation'.

2️⃣ ' String Interpolation ' mae hum variables ko placeholders mae pass karte hai. Ismae '$' use hota hai placeholder create karne mae, aur instead of ( "" or '' ) hum backtiks(``) ue karte hai. Ismae khas baat hoti hai on the go hum yaha pae hum methods bhi use kar sukte hai.

*/

const name = "Harsh";
let repoCount = 50;

console.log(
  `My name is ${name.toUpperCase()} and my repo count is ${repoCount}.`
);

const carName = new String("Safari");

console.log(carName);
