/*
🔸 Aub yaha humnae 2 function create kare hai joh ki 1 toh username set kar raha hai aur dusra user create kar raha hai toh user sae input liya jaa raha hai.
But humnae 'username' ko outsource kiya hua hai, toh aub humae us function ko 'createUser()' function mae call karna hai.
*/
function SetUserName(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email, passeword) {
  SetUserName.call(this, username);
  this.email = email;
  this.passeword = passeword;
}

const userOne = new createUser("Harsh", "harsh@123", "0102help");

console.log(userOne);
/*
output:   Called
          createUser {
            username: 'Harsh',
            email: 'harsh@123',
            passeword: '0102help'
          }

🔸 Aub yaha pae humnae use kara hai '.call' method. '.call' method hold karta hai function ka reference jisae hum call kar rahe hai. Aur uskae andar joh hum 'this' pass karte hai vo current context kae liye use hota hai.
*/
