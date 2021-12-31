let calculation = 0;
function masterFibbonaci() {
  let cache = {};
  return function fibbonaci(n) {
    calculation++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fibbonaci(n - 1) + fibbonaci(n - 2);
        return cache[n];
      }
    }
  };
}

let cal = 0;
function fib(n) {
  cal++;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// fib(20);
// console.log(cal);

const main = masterFibbonaci();
console.log(main(20));
console.log(calculation);
