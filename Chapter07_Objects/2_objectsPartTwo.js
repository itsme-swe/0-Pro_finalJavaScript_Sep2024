// Passing function as key inside object
const user1 = {
  name: "Adam",
  location: "Austria",
  email: "adam@gmail.com",
  bodyIndex: [5.8, 75, "fair"],
  greeting: function () {
    console.log("Hello World");
  },
};

user1.greeting = function () {
  console.log(`Hello User, ${this.name}`);
};
console.log(user1.greeting());
console.log(user1.greeting());
