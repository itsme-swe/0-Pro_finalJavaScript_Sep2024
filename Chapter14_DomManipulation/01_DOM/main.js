/*
1️⃣ Agar humae DOM mae kuch bhi 'id' kae basis pae select karna hai toh hum use karte hai ' document.getElementByID('idName') '. Hum inhae "query selector" bhi bolte hai.

2️⃣ Agar kisi bhi tag mae sae humae content fetch karna hai toh hum use karte hai '.textContent', '.innerText' aur '.innerHTML'.

3️⃣ But '.innerText' mae humae sirf vo he text show hota hai joh ki visible hota hai, yani ki hidden nhi hota. Aur '.innerContent' mae hame pura text show joh bhi purae <tag> mae hai. Aur '.innerHTML' mae hame pura ka pura text aur uskae anadar agar koi html bhi hai toh vo bhi show hota hai, jaise yaha pae <span> tag present hai <h1> tag kae anadr.

4️⃣ Aub joh sabse jaada "query selector" hum use karte hai vo hai ' document.querySelector('h1') '. Yae hamae first h1 tag return kardega.

5️⃣ Agar humae 'HTMLCollection' aur 'NodeList' ko array mae convert karna hai toh hum use kartae hai " Array.from(HTMLcollection or NodeList) ".


*/

const title = document.getElementById("title");

console.log(title.textContent); // o/p: DOM Learning on Chai or Code Test Text

console.log(title.innerText); // o/p: DOM Learning on Chai or Code

console.log(title.innerHTML); // o/p: DOM Learning on Chai or Code <span style="display: none;">Test Text</span>

console.log(document.querySelector("h2"));
