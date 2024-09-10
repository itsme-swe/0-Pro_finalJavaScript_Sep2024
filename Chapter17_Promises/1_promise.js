/*
1️⃣ Jaada tar hum promises ko consume karte hai.

2️⃣ Promises 1 object hotae hai toh hum koi bhi promise 'new' keyword ki help sae he banatae hai. Aur Promise as parameter 1 callback function laeta hai, jiskae 2 parts hote hai (resolve, reject). Aub promise kae andar hum kai opearations perform kar sukte hai jaise:
  ₁ Async Task
  ₂ DataBase calls, cryptograpgy calls, Network calls
  ₃ setTimeout()

  E.g. - const promise = new Promise( function(resolve, reject) {         
                setTimeout()
    } );

3️⃣  'resolve' method ka direct realtion hota hai '.then()' kae sath. '.then()' method bhi apne andar 1 callback function laeta hai, joh 'resolve()' method ka response apne andar store karta hai.

4️⃣

*/

// Step 1:  Creating promise
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task Completed");
    resolve();
  }, 1000);
});

//  Step 2: Consuming promise
promiseOne.then(() => {
  console.log("Promise Consumed");
});

/*
🔸 Output:  Async Task Completed
            Promise Consumed
*/
