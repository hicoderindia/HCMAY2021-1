
console.log("Hello World");


let current = document.querySelector(".current");

//next siblings
let nextSibling= current.nextElementSibling;
console.log(nextSibling);



//next all siblings

let nextSiblings = (elem) => {
    let siblings = [];

    while (elem = elem.nextElementSibling) {
        siblings.push(elem);
    }
    return siblings;
};
let current1 = document.querySelector('.current');

let siblings = nextSiblings(current1);
console.log(siblings);
