let content = document.getElementById("menu");

//first Child
let firstChild = content.firstElementChild;

console.log(firstChild);

//last Child

let lastChild= content.lastElementChild;

console.log(lastChild);


//all Child   //So here text and comment is also adding 
let allChild = content.childNodes;

console.log(allChild);


let parentChilds = content.children;

console.log(parentChilds);