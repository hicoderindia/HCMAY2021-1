let menu = document.getElementById("menu");
console.log(menu);

// for (let i = 0; i < 1000; i++) {
//   let p = document.createElement("p");
//   p.textContent = `Paragraph ${i}`;
//   div.appendChild(p);
// }

// let fragment = document.createDocumentFragment();

// for (let i = 0; i < 1000; i++) {
//   let p = document.createElement("p");
//   p.textContent = `Paragraph ${i}`;
//   //div.appendChild(p);
//   fragment.appendChild(p);
// }

// div.appendChild(fragment);

let li = document.createElement("li");
li.textContent = "Home";

menu.insertBefore(li, menu.firstElementChild);
