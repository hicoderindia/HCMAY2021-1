//3) Write a program that demonstrates global variables by creating a function, add(), that accesses the values of two global variables and returns the sum of these variables.

"use Strict"

var firstName= "John"
var lastName= "parson"

function fullName(firstName, lastName){
    var myName= firstName+lastName;
    return myName;
}

var myName = fullName(firstName, lastName);

console.log(myName)

