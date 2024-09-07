const bgcolor = document.querySelector(".window");

bgcolor.style = "background-color: #414141; color: aliceblue";

/*
1️⃣ Best approach hoti hai events use karne kae liye ki hum events " addEventListner() " method mae use kare. " addEventListner() " mae 3 parameter pass hotae hai ₁ ⇢ event, ₂ ⇢ callback function and ₃ ⇢ false joh ki by default pass hota hai. 

E.g : .addEventListner('click', function() {}, false)

2️⃣ Some important objects of events: 
  ₁ type
  ₂ timestamp
  ₃ defaultPrevented
  ₄ target
  ₅ toElement
  ₆ srcElement
  ₇ currentTarget
  ₈ clientX, clientY, screenX, screenY
  ₉ altKey, ctrlKey, keyCode  

  3️⃣ Event Propogation: In web development, event propagation can happen in two ways:

      ₁ Bubbling: The event starts from the element you interacted with (the innermost box) and "bubbles up" to the outer elements.

      ₂ Capturing: The event goes the other way, starting from the outermost element and then moving inward to the innermost element.

      Event propagation ko stop karne kae liye hum use karte hai 'e.stopPropagation()' issae hamara event bubble hokae upper root element ki taraf nhi jayega 
*/

const owl = document.querySelector("#owl").addEventListener(
  "click",
  (e) => {
    alert("Owl has been clicked");
    console.log(e);
  },
  false
); // Here 'e' stands for event objects

console.log(owl);

const mainUl = document.querySelector("#images").addEventListener(
  "click",
  (e) => {
    console.log(e.target.parentNode);
    let remove = e.target;
    remove.remove();
  },
  false
);

console.log(mainUl);
