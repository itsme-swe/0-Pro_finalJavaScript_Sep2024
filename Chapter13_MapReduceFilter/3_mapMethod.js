const arr = [5, 10, 15, 20, 25, 30];

const newArr = arr.map((val) => {
  return val + 5;
}); // Here 'val' stands for every element present in array

console.log(newArr);

/*
output: [ 10, 15, 20, 25, 30, 35 ]
Is mae humane map() method sae har element kae andar 5 add kardiya. 'map() method' bhi 1 callback function as parameter laeta hai.
*/
