/*
1️⃣ All the primitive dataTypes use Stack Memory.

2️⃣ All the reference dataTypes use Heap Memory.

3️⃣ "Stack Memory" mae joh bhi values store hoti hai vo unki copy hoti hai na ki original values.

4️⃣ "Heap Memory" mae joh bhi values store hoti hai vaha unka reference jaata hai toh agar hum changes karenge toh unki original values bhi modify hongi.
*/

//»» E.g of "Stack memory"
let foodApp = "Zomato";

let anotherFoodApp = foodApp; // yaha pae humnae foodApp ki value anotherFoodApp mae copy kardi hai

anotherFoodApp = "Swizzy"; // Aur yaha pae phir humnae anotherFoodApp ki value change kardi hai

console.log(foodApp); // Zomato

console.log(anotherFoodApp); // Swizzy

//»» E.g of "Heap Memory"
let user = {
  userName: "Harsh05",
  email: "harsh@xyb.com",
  upi: "user@ybl",
};

let newUser = user; // yaha pae humnae new variable create kara aur usmae 'user' joki 1 reference type hai usae store kara diya

newUser.upi = "7577@ybl"; // Aur phir yaha hum pane new user ki upi ko modify kar rahe hai

console.log(user); // Joki 'user' 1 non-primitive dataType hai toh uska bhi upi yaha pae change ho jayega.
