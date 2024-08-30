// Creating String

let dept = new String("cyberSecurity");

console.log(dept.toUpperCase()); // ' toUpperCase ' sae sabhi small letters ko capital mae convert kar sukte hai

console.log(dept.length); // ' length ' method sae hum length pata kar sukte hai kisi bhi string ki.

console.log(dept.charAt(3)); // ' charAt(index_val) ' method help karta hai kis index value pae kaunsa character pada hai.

console.log(dept.indexOf("e")); // ' indexOf('char') ' method sae hum yae pata kar sukte hai ki character kaunse index pae present hai

const newDept = dept.substring(0, 5); // ' subString(start_index, end_index) ' use karte hai kisi bhi string mae sae kuch particular part ko extract karne kae liye.

console.log(newDept); // o/p : cyber

console.log(dept.slice(-8, 10)); // 'slice(start_index, end_index)' bhi string kae sub part ko extract karne kae kam aata hai but slice mae negative value bhi pass kar sukte hai

const url = "https://harsh.com%20mehra";

console.log(url.replace("%20", "-")); // ' replace('valToBeSearched', 'newValToBeEntered') ' hum use karte hai jub string mae humae koi char ko replace karni ho.

let laptop = "Apple Mac Book Pro";

let arr = laptop.split(" ");

console.log(arr);
