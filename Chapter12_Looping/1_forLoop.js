/*

*/
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Nested Looping

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 5; j++) {
    console.log(`Inner loop values ${j} and inner loop ${i}`);
  }
}
