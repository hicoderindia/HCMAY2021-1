console.log(undefined == null); //true

// null is pointer to an empty object

var obj = null;
console.log(typeof obj);

console.log(undefined == Object);

var student1 = {
  name: "Charan",
};

var student2 = null;

console.log(student1 == student2); //false
console.log(student1 === student2); //false

// undefined = null
// null = Object
// undefined = Object ??

// a = B
// b = c
// a = c ?

// NaN = Not a Number, invalid number

/**
 * 1. Any operation with NaN returns NaN
 * 2. The NaN does not equal to any value, including itself
 */

/**  + - 1) addition  E.g : 2 + 2 =>
 *                          if both are numbers -> number
 *                          if both are strings -> string
 *                          if one string and one number -> string
 *
 *       2) Concate
 *
 * */

console.log(typeof NaN);
console.log(NaN / 2);
console.log(NaN * 2);
console.log(null * 2);
console.log(undefined * 2);
console.log("2" * 2);
console.log("222F" * 2);
console.log("22200" * 2);
console.log(undefined + 2);
console.log(undefined + "2");
console.log(undefined + "2" + null);
console.log(2 + "2" + 2);
console.log(2 + 2 + 2);
console.log(2 * "2" * 2);
console.log(2 * "2" * null);
