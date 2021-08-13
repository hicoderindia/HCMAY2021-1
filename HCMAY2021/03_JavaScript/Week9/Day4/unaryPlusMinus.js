//Unary operators

/**
 * +
 * -
 * ++
 * --
 */

// operand : a, 10
// operator : =, +

let a = 10;
a = +a;
console.log(a);

let b = "10FF";
b = +b;
console.log(b);

let c = "1099";
c = +c;
console.log(c);

let d = "1099";
d = -d;
console.log(d);

let ab = "10FF";
ab = -ab;
console.log(ab);

let f = "false"; // "10"
console.log(+f);

let n = null;
console.log(+n);

let z = true;
console.log(+z);
