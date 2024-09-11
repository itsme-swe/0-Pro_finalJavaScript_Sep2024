class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createID() {
    return `${Math.round(Math.random() * 1000 + 1)}`;
  }
}

const Harsh = new User("Harsh");

console.log(Harsh.createID());
