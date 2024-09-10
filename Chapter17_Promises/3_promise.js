/*
1️⃣ Aub agar koi network call kar rahe hai aur usmae error aata hai toh hum usae 'promise()' ki help sae us error ko kuch is tarah catch karte hai. 

2️⃣ Catch() method ka direct relation hota hai 'reject' method kae sath. Catch() method bhi apne andar 1 callback function laeta hai. 
*/

const errorHandlingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Harsh0506", pass: "Harsh0101" });
    } else {
      reject("Error: Something went wrong with DataBase");
    }
  }, 1000);
});

errorHandlingPromise
  .then((userInfo) => {
    console.log(userInfo);
    return userInfo.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is finally resolved or either rejected");
  });
