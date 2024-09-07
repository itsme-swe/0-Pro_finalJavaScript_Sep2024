/*
1️⃣ New element banane kae liye hum use karte hai DOM mae " .createElement(eleName) "
 */
const div1 = document.createElement("div");

div1.className = "ele1"; // adding attributes to the element
div1.id = Math.round(Math.random() * 10 + 1); // adding id to the element but here just for the fun we are using Math library

div1.setAttribute("title", "main"); // " .setAttribute(key,val) " use karte hai custom attributes set karne kae liye

// div1.innerText = "This is my first div container";

const textNode = document.createTextNode(
  "This is the optimized way to add text in div"
); // yae optimized tarika hota hai text add karne ka kisi bhi element mae

div1.appendChild(textNode); // attaching our text to the div container

document.body.appendChild(div1); // And, attaching our div container to the window

console.log(div1);
