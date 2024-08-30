/*
1️⃣ JavaScript mae dates calculate hoti hai 1 Jan 1970 aur yae sub milliseconds mae calculate hoti hai. 
 */

//🔸 Creating Instance of Date
let myDate = new Date();

console.log(myDate); // Output: 2024-08-30T11:26:03.109Z

console.log(myDate.toString()); // Output: Fri Aug 30 2024 16:59:14 GMT+0530 (India Standard Time)  »»» jub hum date ko string format mae change karte hai toh vo readable hoti hai

console.log(myDate.toDateString()); // Output: Fri Aug 30 2024

console.log(myDate.toISOString()); // Output: 2024-08-30T11:36:50.994Z

console.log(myDate.toJSON()); // Output: 2024-08-30T11:36:50.994Z

console.log(myDate.toLocaleDateString()); //Output : 8/30/2024

console.log(myDate.toLocaleTimeString()); // Output: 5:30:12 PM

console.log(myDate.toLocaleString()); // output: 8/30/2024, 5:55:34 PM
