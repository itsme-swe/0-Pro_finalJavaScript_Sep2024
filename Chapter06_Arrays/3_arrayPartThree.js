/**************🔸Array Methods🔸************/

let myArr = ["harsh", 32, 80.5, "SDE", "remote", 150000, true];

let myArr1 = myArr.slice(2, 5);

console.log("Original array: ", myArr); // output : Original array:  [ 'harsh', 32, 80.5, 'SDE', 'remote', 150000, true ]

console.log("slice method: ", myArr1); // output : slice method:  [ 80.5, 'SDE', 'remote' ]

console.log("Original array: ", myArr); // output : Original array:  [ 'harsh', 32, 80.5, 'SDE', 'remote', 150000, true ]

console.log();

console.log("Original array: ", myArr); // output : [ 'harsh', 32, 80.5, 'SDE', 'remote', 150000, true ]

let myArr2 = myArr.splice(2, 5);

console.log("splice method: ", myArr2); // output : splice method:  [ 80.5, 'SDE', 'remote', 150000, true ]

console.log("Original array: ", myArr); // output : Original array:  [ 'harsh', 32 ]

/*
🔸 Difference between slice and splice is slice hamare original array ko modify nhi karta hai aur splice hamare original array ko modify karta hai
*/
