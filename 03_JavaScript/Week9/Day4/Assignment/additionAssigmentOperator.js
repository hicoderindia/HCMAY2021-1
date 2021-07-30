"use strict";

/**
 * a = b
 * a += b
 * a -= b
 * a *= b
 * a /= b
 * a %= b
 * a &= b
 * a |= b
 * a ^= b
 * a <<= b
 * a >>= b
 * a <<= b
 *
 */


//Addition assignment Operators

let x=30;
x += x;

console.log(x);


//Addition assignment Operator with variable

let a=5;
let b= 30;
let c = +a;

console.log(c)

//Addition assignment Operator with multiple variable

let a1=5;
let b1= 30;
let c1 = ++a1+b1;

console.log(c1) //here is has added c1= a1=b1 and then agani i have added 1 in a1 value.

//One more Addition with multiple variable. This time we will do with b2

let a2=5;
let b2= 30;
let c2 = a2+b2++;

console.log(c2)


//one more example  for prefix

let x = 3;
let y = x++;

console.log(x, y);
console.log(x +5); //ans is 9 because in line number 36, x value adding with 1, so now x value became 4. so 4+5= 9.



// concatenation

let firstName= `ram`;

console.log(firstName += ` Charan`);


//LET ADD NUMBER/INTIGER AND STRING concatenation

let placeName= "Hyderabad";
let pin= "500045";

let address = placeName + pin;

console.log(address); //or 
console.log(placeName += " 500045" + " Telengana");



//boolean addtion

let value1= true;
let value2= false;

console.log(value1 += value2); //true and false= true

//addtion of true + true 
console.log(value1 += true);

//addtion of falese + false 

console.log(value2 += false);





