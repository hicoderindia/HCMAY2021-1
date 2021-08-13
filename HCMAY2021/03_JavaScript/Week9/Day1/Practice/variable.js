//"use strict";

// loosely typed

//var example = "Hello";

var example; // decalration
example = "Hello"; //initialization

example = 20;

console.log(example);

//var num; // undefined variable
//num;
//console.log(num);
num2 = 11;
console.log(num2);
console.log(message); //hoisting

var message = "Hello";
//var message = "Hi";
console.log(message);

function say() {
  "use strict";
  num3 = 11;
  console.log(num3);
  message = "Hi";
  console.log(message);
  // function inner() {
  //   ex = "I'm ex";
  //   console.log(ex);
  // }

  // inner();
  // console.log(ex);
}
say();
message = 2;

console.log(message);
//console.log(ex);
