function printHello() {
  let a = 10,
    b = 20;
  function sum() {
    return a + b;
  }
  return sum();
}

console.log(printHello());
