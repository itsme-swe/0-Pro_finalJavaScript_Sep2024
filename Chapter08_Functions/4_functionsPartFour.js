/*
🍁 Passing object as parameter inside function.

*/

const obj = {
  item: "Shampoo",
  price: 250,
};

function handleObject(anyObj) {
  return `The price of item ${anyObj.item} is ${anyObj.price}.`;
}

console.log(handleObject(obj)); // output: The price of item Shampoo is 250.
