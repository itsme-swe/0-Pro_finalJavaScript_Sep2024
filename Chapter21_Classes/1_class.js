/*
1️⃣ Creating class in JS. 
*/

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPass() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new User("Harsh", "harsh@abc.com", "help0506");

console.log(userOne);

console.log(userOne.encryptPass()); //output: help0506abc

console.log(userOne.changeUserName()); //output: HARSH
