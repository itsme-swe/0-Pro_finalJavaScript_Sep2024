/*
1️⃣ Aub agar hum promise ko kisi variable mae store nhi kara rahe hai toh hum is tarah promise banatae hai aur usae consume karte hai:
    Hum yaha pae arrow function ka bhi use kar sukte hai.

*/

new Promise((res, rej) => {
  setTimeout(function () {
    console.log("Async task Completed");
    res();
  }, 1000);
}).then(() => {
  console.log("Promise Consumed");
});

/*
Output: Async task Completed
        Promise Consumed
*/

console.log();

/*
2️⃣ Aub agar hum database sae kuch call kar rahe hai toh usae hum 'resolve()' method kae andar laetae hai aur 'resolve()' method ka direct relation '.then()' method kae sath hota hai.
*/

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 3 completed");
    resolve({ username: "Harsh", age: 32 });
  }, 2000);
}).then(function (userInformation) {
  console.log(userInformation);
});
