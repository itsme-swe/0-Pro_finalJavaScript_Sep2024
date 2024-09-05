const shoppingCart = [
  {
    course: "webDev",
    price: 4999,
  },

  {
    course: "Devops",
    price: 25999,
  },

  {
    course: "UIUX",
    price: 20000,
  },
];

const total = shoppingCart.reduce((acc, items) => acc + items.price, 0);

console.log(total);

/*
Is tarah hum kisi bhi cart items ka total laga sukte hai
*/
