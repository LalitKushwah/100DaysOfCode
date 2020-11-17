// O (n) time: 0.194ms
function iterative(n) {
    let prev = 0;
    let next = 1;
    let sum = 0;
    for (let i=0; i <= n-2; i++) {
      sum = prev + next;
      prev = next;
      next = sum;
    }
    return sum;
  }
  console.time();
  iterative(15);
  console.timeEnd();
  
  // O (2^N) time: 0.870ms
  function recursive(n) {
    if (n < 2) {
      return n;
    }
    return recursive(n-1) + recursive(n-2);
  }
  console.time();
  recursive(15);
  console.timeEnd();