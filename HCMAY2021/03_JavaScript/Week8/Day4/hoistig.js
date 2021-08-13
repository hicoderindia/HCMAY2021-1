//Global variables
// var str = undefined;
var num = 20;
// var counter = 10;

console.log(num);
console.log(str);

//Local variables

function sample() {
  var num = 10;
  //console.log(exNum);
  console.log(num);
  console.log(str);
  let i;
  console.log("line num 19 : " + j);
  // if (true) {
  // hoisting
  // }

  for (i = 0; i < 2; i++) {
    console.log(i);
  }
}

var j = "false";

sample();

var str;
srt = "Hyderabad";
var counter; //declaration of variable
counter = 10; // initialization of variable
// var counter = 10;

function getCounter() {
  counter = 10;
  return counter;
}

let y = getCounter();
console.log(y);
console.log(counter);
