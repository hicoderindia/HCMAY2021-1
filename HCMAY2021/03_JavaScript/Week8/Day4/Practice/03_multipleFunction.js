console.log("Hello!")

let x =25 //global variable

function multiplication(a){
    return a*10
}

function addSum(a,b){
    return a+b;
}

let y= multiplication(x);
let result= addSum(x,y);
console.log(result)        //Here you can see there we have done multiply function first and then sum function, but there it is showig sum first then muultiplication. It is happning because of cll stack function. 
console.log(y);
//it is happning because we have created sum function and then call/evoke the function. then we have called the multiplication function. and that is why it is showing after the sum. 



//NOTE- 1.If you call sum munction after the multiplication function then it shows error. because it is connected to first function. 
// 2. In call stack, It works like LIFO principle - last-in First Out.





