//Asynchronomous function
console.log("Hello World!");

function runLoop() {
    for (let i = 0; i <= 10; i++) {
        console.log(i * 5);
    }
}

setTimeout(() => {
    runLoop()
}, 3000);


console.log("Hello There!");

function addsum(a, b) {
    return a + b;

}

let total = addsum(15, 15000);
console.log(total);