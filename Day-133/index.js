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
const main = masterFibbonaci();
console.log(main(10));
console.log(calculation);
