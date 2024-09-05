/*
1️⃣ Filtering out elements from Objects by using filter method.
*/

const cars = [
  {
    carName: "Nexon",
    company: "Tata",
    price: 15,
    color: ["dark", "blue", "grey"],
  },
  {
    carName: "Slavia",
    company: "Skoda",
    price: 18,
    color: ["black", "red", "grey"],
  },
  {
    carName: "Roxx",
    company: "Mahindra",
    price: 22,
    color: ["red", "White", "Gold"],
  },
  {
    carName: "Curv",
    company: "Tata",
    price: 20,
    color: ["red", "Blue", "IvoryGold"],
  },
];

const filteredList = cars.filter((col) => {
  return col.company === "Tata";
});

console.log(filteredList);

/*
output: The upper code will return all those objects which company name is 'Tata'.
*/

console.log();

const colorFilter = cars.filter((col) => col.color.includes("red")); // This code will return all the objects having red color

console.log(colorFilter);
