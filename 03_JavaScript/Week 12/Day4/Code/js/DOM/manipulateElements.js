let div = document.createElement("div");
div.id = "content";
div.className = "sample--class";
let text = document.createTextNode("CreateElement Example text node");
console.log(text);
// div.appendChild(text.data);
div.innerHTML = "<p>Im paragraph</p>";
document.body.appendChild(div);
div.appendChild(text);

/**
 *
 * <h1> I'm h2 header </h2>
 */

let h2 = document.createElement("h2");
h2.textContent = "Im h2 header";
div.appendChild(h2);

let p = document.querySelector("p");
console.log(p);
p.className = "para--class";

let p1 = document.createElement("p");

div.appendChild(p1);
document.body.appendChild(p1);

/*** ( Home Work)
 * <ul id="menu">
 *    <li>Home</li>
 *    <li>products</li>
 *    <li>About US </li>
 * </ul>
 *
 *
 *
 */

let script = document.createElement("script");
script.src = "/js/DOM/hello.js";
script.async = true;
document.body.appendChild(script);

let note = document.getElementById("note");
console.log(note.textContent);

let menu = document.getElementById("menu");
console.log(menu.innerHTML);

// document.body.innerHTML = "";

const scriptTag = '<script>alert("Alert from innerHTML"); </script>';
document.body.innerHTML = scriptTag;
