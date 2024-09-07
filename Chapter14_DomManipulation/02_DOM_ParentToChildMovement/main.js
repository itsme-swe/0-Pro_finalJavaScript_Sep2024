/*
1️⃣ Yaha pae phele humnae window ka background color change kiya
*/
const bgcolor = document.querySelector(".background");

bgcolor.style = "background-color:black";

/*
2️⃣ Phir humnae 'day' class ko select kiya aur phir uspae traverse karte huae apne text font ka color change kiya.
*/
const fontColor = document.querySelectorAll(".day");

fontColor.forEach((ele) => {
  return (ele.style.color = "white");
});

const parent = document.querySelector(".parent");

console.log(parent);

console.log(parent.children[1]); // '.children' property return karta hai elements in HTML collection form.

/*
3️⃣ Aub hum apne HTML collection ko iterate karenge through our normal for loop 
*/

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

parent.children[2].style.color = "orange"; // yaha pae hum index 2 pae joh element hai uska text color change kar rahe hai.

/*
4️⃣ Aub agar humae kisi parent class kae sirf first aur last element ko select karna hai toh hum use karte hai " parent.firstElementChild and parent.lastElementChild ".
*/

console.log(parent.firstElementChild); // op: Monday
console.log(parent.lastElementChild); // op: Thursday

/*
5️⃣ Aub agar humae child element sae parent element pae jaana hai toh hum use karte hai " .parentElement " aur agar kisi bhi child element kae next element ko dekhna hai toh use karte hai " .nextElementSibling ".
 */
const day1 = document.querySelector(".day"); // op: Monday

console.log(day1.parentElement);

console.log(day1.nextElementSibling); // op: Tuesday

console.log("Nodes :", parent.childNodes);
