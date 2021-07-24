function hello(){
   console.log('hello world');
}
function calladd(a,b){
    let result = add(a,b);
    return result;
}
function add(a, b){
hello();
return a+b;
}

let sum= calladd(10,20);
console.log(sum);


console.log('Hello there');