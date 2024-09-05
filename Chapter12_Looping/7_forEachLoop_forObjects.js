//1️⃣ Creating an array and inserting objects as elements inside an array

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
