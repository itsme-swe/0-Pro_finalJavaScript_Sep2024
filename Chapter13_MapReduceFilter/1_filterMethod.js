const nums = [15, 2, 10, 8, 30, 25, 40];

const newNums = nums.filter((ele) => ele > 10);

console.log(newNums);

/*
output: [ 15, 30, 25, 40 ] yaha pae filter() method humae vo sari values return karega joh ki 10 sae badi hongi. 'filter() method  bhi 1 callback function laeta hai aur callback function mae condition pass karni hoti hai aur phir method humae condition kae bases pae result daeta hai. Aur joh value return hoti hai usae hamae kisi variable mae store karna padta hai.
*/

console.log();

const myNums = [101, 55, 35, 15, 110, 205, 150, 140, 200];

const newValues = myNums.filter((val) => {
  return val < 205;
});

console.log(newValues);

/*
output: [
  101,  55,  35,  15,
  110, 150, 140, 200
]

Yaha pae return keyword ka use isliye hua hai kyuki hum nae isbaar 'scope {}' open kiya hai. Aur agar hum scope open karte hai toh humae return keyword ka use karna padta hai.
*/
