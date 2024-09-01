function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in !`;
}

console.log(loginUserMessage("Harsh")); // output: Harsh just logged in !

console.log(loginUserMessage()); // Agar hum koi bhi argument pass nhi karenge toh undefined return hoga.
