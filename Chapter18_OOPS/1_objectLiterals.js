/*
1️⃣ Object Literal ake object he hota hai jiskae anadar functions aur properties present hoti hai.
*/

const user = {
  username: "Harsh",
  signedIn: true,
  signInCount: 5,

  getUserDetails: function () {
    console.log(`username: ${this.username}`);
    console.log(this); // yae hamae current context return karega yani ki user object kae andar joh bhi properties aur functions present hai.
  },
};

console.log(user.getUserDetails());
