/*
1️⃣ '.call' method use hota hai jub hum 1 function ko kisi dusrae function kae andar call karte hai.
*/

/*
🔸 Aub yaha humnae 2 function create kare hai joh ki 1 toh username set kar raha hai aur dusra user create kar raha hai toh user sae input liya jaa raha hai.
But humnae 'username' ko outsource kiya hua hai, toh aub humae us function ko 'createUser()' function mae call karna hai.
*/
function SetUserName(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email, passeword) {
  SetUserName(username);
  this.email = email;
  this.passeword = passeword;
}

const userOne = new createUser("Harsh", "harsh@123", "0102help");

console.log(userOne);
/*

output:   Called
          createUser { email: 'harsh@123', passeword: '0102help' }

🔸  Aub problem yaha joh  aa rahi hai vo yae hai ki email or password toh set ho raha hai par username nhi ho raha hai.

*/
console.log();
