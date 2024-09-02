const user1 = {
  userName: "Harsh",
  price: 2985,

  welcomeMsg: function () {
    console.log(`${this.userName}, welcome to website`); // yaha pae joh hum 'this' keyword use kar rahe hai vo current context ko refer kar raha hai.
  },
};

/*
🔸 Aur current context hota hai joh bhi curly braces( { } ) kae andar values hoti hai. Context ka matlab values yani ki curly braces kae andar kiske baare mae baat ho rahai hai.
*/

user1.welcomeMsg(); // output: Harsh, welcome to website

user1.userName = "Sam"; // changing userName

user1.welcomeMsg(); // output: Sam, welcome to website
