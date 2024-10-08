//1️⃣ Creating an array and inserting objects as elements inside an array. So here we are using 'forEach' loop to iterate over objects as elements inside an array. Mostly we use this technique when we deal with databases.

const usersList = [
  {
    name: "Harsh",
    city: "jaipur",
    mobile: 91900345,
  },

  {
    name: "Vandana",
    city: "ajmer",
    mobile: 916780345,
  },

  {
    name: "Kiru",
    city: "Delhi",
    mobile: 914560345,
  },
];

usersList.forEach((ele) => {
  console.log(ele.name);
});

/*
output:   Harsh
          Vandana
          Kiru
*/
