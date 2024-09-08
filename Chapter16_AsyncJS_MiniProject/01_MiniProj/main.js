const windowBg = (document.querySelector(".mainBody").style =
  "background-color: black; color: white");

console.log(windowBg);

/*
1️⃣ 'setTimeout()' function apne andar 2 parameter laeta hai phela 1 callback function aur dusra time in milliseconds joh ki utni dere baad execute hoga.
*/
const sayHello = function (username) {
  console.log(`Hello, ${username}`);
};

setTimeout(sayHello, 2000, "Harsh");
/*
yaha pae humnae function alag sae banae kae uska reference pass kiya hai setTimeout() function kae andar. 
*/

const stopButton = document.querySelector("#stop").addEventListener(
  "click",
  () => {
    console.log("Event Stopped");
  },
  2000
);
