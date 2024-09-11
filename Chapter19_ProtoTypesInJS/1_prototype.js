const user = {
  username: "Harsh",
  pass: "abc123",
};

const userProfile = {
  city: "jaipur",
};

Object.setPrototypeOf(userProfile, user);

console.log(userProfile.username); //output: Harsh

/*
Aub yaha pae humae agar 1 object ki properties dusrae object ko use karni hai toh hum use karte hai " Objects.setPrototypeOf() " aur iskae andar pass 2 parameters phela us object ka name jisae dusrae object ki proprties use karni hai aur dusra object vop jiski properties copy hongi.
*/
