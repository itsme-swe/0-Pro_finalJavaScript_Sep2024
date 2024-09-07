/*
1️⃣ Yaha pae function ki help sae list item add karenge apni un-odered list kae anadar. 
*/

const addListItems = (langName) => {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".lang").appendChild(li);
};

addListItems("Python");

/*
2️⃣ Aub same upper vali cheej karenge but thodi optimized tarikae sae.
*/

function optimizedFunc(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".lang").appendChild(li);
}

optimizedFunc("Java");
optimizedFunc("Ruby");
