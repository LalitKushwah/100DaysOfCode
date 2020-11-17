// find factorial of a given number using recursive and non recursive method

// O(n)
function iterative(number) {
    let result = 1;
    if (number > 0) {
      for ( let i = number; i > 1; i--) {
        result = result * i;
      }
    }
    return result;
  }
  iterative(5);
  
  // O(n)
  function recursive(number) {
    if (number <= 0) {
      return 1;
    }
    if (number === 2) {
      return number;
    }
    return number * recursive(number-1);
  }
  
  recursive(5);