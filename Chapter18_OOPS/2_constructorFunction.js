/*
1️⃣ Joh hum 'new' keyword use karte hai vahi constructor function hota hai. Kyuki 'new' keyword sae he hum naya context banate hai. Iska matlab constructor function hamae hamesha ake naya instance/object deta hai. Jub bhi hum 'new' keyword use karenge toh ake naya object create hoga '{}'.
E.g. -- const promiseOne = new Promise();
*/

function User(username, loginCount, isLoggedIn) {
  this.username = username; // left hand side hamara variable hai aur right hand side hamara parameter vali value joh hum iskae andar pass kar rahe hai
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this; // agar hum yaha pae 'return this' kar rahe hai toh joh values is function mae ayegi vo values easily access kar sukte hai.
}

const userOne = User("Harsh", 5, true);

const userTwo = User("Mukul", 3, false);

/*
🔸 Agar hum User function sae koi bhi naya instance create karenge toh hamari values overwrite kar di jayengi joh bhi last vala instance create hoga ussae. Issliye is problem ko solve karne kae liye hum hamesha new keyword use karenge, joh ki hamae hamesha new context create karne mae help karta hai.
*/

console.log(userOne);

console.log();

const userThree = new User("Vandana", 3, true);
const userFour = new User("Gaurav", 5, false);

console.log(userThree);
console.log(userFour);
