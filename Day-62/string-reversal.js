// Problem: Reverse a given string
// Input: lalitkushwah
// Output: hawhsuklilal

// Approach 1: loop through string from higher index to lower and store each loop element in a string and after completing looping return that string

function stringReversal(inputString) {
    if (!inputString || inputString.length < 2 || typeof inputString !== 'string') return 'Invalid input';
    let temp = [];
    for (let i = inputString.length -1; i > -1; i-- ) {
      temp.push(inputString[i]);
    }
    return temp.join('');
  }
  
  stringReversal('abc def');