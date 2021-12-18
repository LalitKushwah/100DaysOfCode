function counter() {
  for (var i = 1; i < 6; i++) {
    (function (count) {
      setTimeout(() => {
        console.log(count);
      }, count * 1000);
    })(i);
  }
}
counter();

// Applications where we can use Closures
/**
 * 1. Module pattern implementation
 * 2. Memoization (Dynamic programming)
 * 3. Data Hiding
 */