/*
1️⃣ map sirf 'key-value' pair mae unique element store karta hai, duplicate values not allowed in map. 
*/

const map = new Map(); // Javascript mae is tarah map banaya jaata hai. Map object hota hai JS mae.
map.set(1, "TataCurv");
map.set(2, "TataNexon");
map.set(3, "3XO");
map.set(4, "XUV700");

console.log(map); //ans: Map(4) { 1 => 'TataCurv', 2 => 'TataNexon', 3 => '3XO', 4 => 'XUV700' }

console.log();

// using ' for of ' loop on map
for (const [key, value] of map) {
  console.log(key, ":", value);
}

/*
output: 
        1 : TataCurv
        2 : TataNexon
        3 : 3XO
        4 : XUV700
*/
