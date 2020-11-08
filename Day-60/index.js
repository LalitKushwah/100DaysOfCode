// Problem : find out first non repeating element from string
// Input: asdrfghsujarlp
// output: d



// Naive approach O(n^2)
// loop through input string character by character
// check each character of input string with next character if not found then return that string


let inputString  = 'asdrfghsujarlp';
function getFirstNonRepeatingCharacter(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    let flag = false;
    for (let j = i+1; j < inputString.length; j++) {
      if (inputString[i] === inputString[j]) {
          flag = true;
      }
    }
    if (!flag) return inputString[i];
  }
}
getFirstNonRepeatingCharacter(inputString);

// ============================================================================================================

// [ Better soution ] O (n)
// store each character of string in object (map)
// loop through each character of string and check if it exists in map // or not
// if character not found then return character
let map = {}
function prepareMapFromInputString(inputString) {
    Array.from(inputString).forEach(char => {
      if (!map[char]) map[char] = true;
      else map[char] = false;
    })
    for (let char of inputString) {
      if(map[char]) {
        return char;
      } 
    }
  }
  prepareMapFromInputString(inputString);

// ============================================================================================================


// Using inbuilt method O (n)
function usingInbuildFunctionPower(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.indexOf(inputString[i]) === inputString.lastIndexOf(inputString[i])) {
      return inputString[i];
    }
  }
}

usingInbuildFunctionPower(inputString);
