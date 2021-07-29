//9) Rewrite the program above so the area of the circle is displayed with only two digits after the decimal place.

"use strict";

var pai = 3.14;
var r= 2.5;

function circleValue(){
    var array= pai * r * r
    console.log(array);
};

var total =circleValue();
var fixed =total.toFixed(2);
console.log(fixed);
