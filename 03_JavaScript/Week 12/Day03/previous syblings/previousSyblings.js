console.log("Hello World");

let current = document.querySelector(".current");
//previous siblings

let prevSibling = current.previousElementSibling;
console.log(prevSibling);

//previous all siblings

let prevSiblings = (elem) => {
    let siblings = [];

    while (elem = elem.previousElementSibling) {
        siblings.push(elem);
    }
    return siblings;
};
let current1 = document.querySelector('.current');

let siblings = prevSiblings(current1);
console.log(siblings);