/*
1️⃣ if else Statement : Agar hamari condition true hoti hai tub he hum ' if(condition){ } ' kae scope kae andar jaate hai. ' if ' condition mae hum comparison operators use karte hai. E.g: < , > , <= , >= , !=(not equal) ( 3 != 2 ) » iska matalab hai kya three, two kae equal hai ,  ===  

2️⃣ ' && ' logical AND operator, ismae dono condition true honi chaiye tubhe scope kae andar vala code execute hota hai.

3️⃣ ' || ' logical OR opeartor, ismae koi si bhi 1 condition true honi chaiye toh code execute ho jaata hai.  


*/

if (2 == "2") {
  console.log("True");
}

// ans: iska output 'true' ayega kyu '==' operator sirf value check karta hai

console.log();

if (2 === "2") {
  console.log("False");
}

// ans: yae code execute nhi hoga kyuki '===' operator value kae sath data type bhi check karta hai
