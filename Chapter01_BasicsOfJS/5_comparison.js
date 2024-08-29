console.log("2" > 1); // yae 'true' return karega kyuki 2 hamesha 1 sae bada hota hai. JS automatically yaha pae string ko number mae convert kar rahi hai

console.log(null > 0); // false

console.log(null == 0); // false

console.log(null >= 0); // true »» yaha true isliye aaya kyuki comparison operator 'null' ko number treat karta hai as 0.

console.log("2" === 2); // 'false' return karega kyuki yaha pae yae value aur data type dono check karta hai ( ' === ' strict equality )

console.log("2" == 2); // ' true ' return karega kyuki yaha pae value check hoti hai agar same hai toh (type coercion) hoga conversion of value ( ' == ' loose equality )

console.log("3" == 2); // false
