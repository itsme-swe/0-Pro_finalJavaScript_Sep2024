/*
1️⃣ JavaScript mae month 0 sae start hote hai.
*/

let myCreatedDate = new Date(2024, 7, 30); // Is tarah hum khud kae parameters bhi pass kar sakte hai

console.log(myCreatedDate.toDateString()); // Fri Aug 30 2024

let newDate = new Date(2024, 7, 30, 17, 42); // (yyyy, mm, dd, hr, min)

console.log(newDate.toLocaleString()); // 8/30/2024, 5:42:00 PM

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(newDate.getTime());

//🍁 Now converting milliseconds to seconds and ignoring decimal values.

console.log(Date.now() / 1000); //output: 1725020440.858 in seconds

console.log(Math.round(Date.now() / 1000)); // output: 1725020496 in seconds and ignoring decimal values

//🍁 UseCase of toLocaleString -- toLocaleString() kae andar hum object bhi pass kar sukte hai
newDate.toLocaleString("default", {
  weekday: "long",
});
