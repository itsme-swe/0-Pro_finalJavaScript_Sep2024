/*
1️⃣ ' forEach ' loop »» Most commonly used loop in JS. 'forEach' loop 1 higher order function considered hota hai. forEach( function(eleOfArray) {} ) apane andar callback as parameter leta hai. Aub yaha hum 'arrow function' bhi use kar sukte hai.

2️⃣ ' forEach ' loop mae function bhi pass kar sukte hai par sirf function ka reference na ki usae call karenege. 

3️⃣ ' forEach ' loop sirf humae elements he return nhi karta vo humae index value aur pura complete array bhi return karta hai.
*/

const coding = ["JS", "Java", "Python", "Cpp", "Ruby"];

coding.forEach((ele) => {
  console.log(ele);
});

/*
output:   JS
          Java
          Python
          Cpp
          Ruby
*/

console.log();

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe); // function ka sirf reference pass kar rahe hai

console.log();

coding.forEach((ele, index, arr) => {
  console.log(ele, index, arr);
});

/*
output:   JS 0 [ 'JS', 'Java', 'Python', 'Cpp', 'Ruby' ]
          Java 1 [ 'JS', 'Java', 'Python', 'Cpp', 'Ruby' ]
          Python 2 [ 'JS', 'Java', 'Python', 'Cpp', 'Ruby' ]
          Cpp 3 [ 'JS', 'Java', 'Python', 'Cpp', 'Ruby' ]
          Ruby 4 [ 'JS', 'Java', 'Python', 'Cpp', 'Ruby' ]
*/
