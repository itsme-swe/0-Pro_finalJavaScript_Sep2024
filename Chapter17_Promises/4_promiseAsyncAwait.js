/*
1️⃣ Aub promise ko handle karne kae liye JS mae hamare pass '.then()' aur '.catch()' kae alava 1 aur method hote hai 'async await'. 


*/

//🔸 Yaha pae hum arrow function use kar rahe hai isliye humnae function ko call karne kae liye IFFI ka use kiya hai
const consumePromise = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ username: "Harsh", pass: "20202" });
    } else {
      rej("Error: JS went wrong");
    }
  }, 1000);
});

(async () => {
  try {
    const response = await consumePromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();

console.log();
