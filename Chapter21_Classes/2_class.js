/*
1️⃣ Inheritance in JS
*/

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const userOne = new Teacher("Harsh", "harsh@gmail", "05birthday");

console.log(userOne.addCourse());

const userTwo = new User("Vasu");

console.log(userTwo.logMe());

console.log(userTwo instanceof Teacher); //output:  false

console.log(userOne instanceof User); //output: true
