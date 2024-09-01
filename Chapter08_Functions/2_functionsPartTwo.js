function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in !`;
}

console.log(loginUserMessage("Harsh")); // output: Harsh just logged in !

console.log(loginUserMessage()); // Agar hum koi bhi argument pass nhi karenge toh undefined return hoga.

console.log();

//🔸 Aub is function mae hum default value set karenge agar user kuch bhi pass nhi karega tub bhi hamari default value print hogi.
function loginDetail(user = "Atom") {
  if (!user) {
    console.log("Enter valid username");
    return;
  }
  return `${user} logged in !!`;
}

const user1 = loginDetail("Sam");

const user2 = loginDetail();

console.log(user1); // output: Sam logged in !!
console.log(user2); // output: Atom logged in !!
