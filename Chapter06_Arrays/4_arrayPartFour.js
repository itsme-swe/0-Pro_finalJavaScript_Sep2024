/********************🔸Array Methods🔸************************/

const indianCities = ["Banglore", "Hydrabad", "Gurugrm", "Pune"];

const usCities = ["California", "Boston", "New Jersey"];

const techCities = usCities.concat(indianCities); // ' .concat() ' method is used to merge one array into another one and it return  new array.

console.log(techCities);

console.log();

const spreadOperator = [...indianCities, ...usCities]; // we generally use 'spread operator(...arrName1, ...arrName2)' to merge the arrays

console.log(spreadOperator);

console.log();

const nestedArray = [
  1,
  2,
  3,
  ["swe", "sde"],
  ["Adam", "Bill", "Mark"],
  75.5,
  80.0,
];

const flatMethod = nestedArray.flat(Infinity); // ' .flat Method() ' generally use to spread the elements of nested array

console.log(flatMethod);
