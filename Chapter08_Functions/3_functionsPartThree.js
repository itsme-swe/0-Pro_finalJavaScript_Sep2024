/*
🔸 'Rest Operator' joh use hota hai parameters ki jagagh, jaha hamae pata naa ho ki kitne parameters user pass karega. But yae rest operator(...) array return karta hai.

Aur yaha neeche code mae hamae cart ki prices array mae return hui, aur usae add karne kae liye hum nae uspae iterate kiya aur values ko add kiya. Is code ko aur optimize hum ' .reduce() ' method sae bhi kar sukte hai.


*/

function calculateCartPrice(...num1) {
  return num1;
}

const totalCartPrice = calculateCartPrice(100, 200, 150, 300);

console.log(totalCartPrice); // output: [ 100, 200, 150, 300 ]

let sum = 0;

let m = totalCartPrice.length;

for (let i = 0; i < m; i++) {
  sum += totalCartPrice[i];
}

console.log("Total value of cart: ", sum); // output: Total value of cart:  750
