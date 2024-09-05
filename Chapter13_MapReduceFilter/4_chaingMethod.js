const nums = [2, 4, 6, 8, 10, 12];

const newNums = nums
  .map((ele) => ele * 5)
  .map((ele) => {
    return ele + 5;
  })
  .filter((val) => {
    return val > 35;
  });

console.log(newNums);

/*
output:   [ 45, 55, 65 ]

'chaing method' sae hum multiple map, filter etc methods ko use kar sukte hai.
*/
