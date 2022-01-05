function reverseWordsInString(string) {
  let startOfWord = 0;
  const output = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === " ") {
      output.push(string.slice(startOfWord, i));
      startOfWord = i;
    } else if (string[startOfWord] === " ") {
      output.push(" ");
      startOfWord = i;
    }
  }
  output.push(string.slice(startOfWord));
  return getReverse(output).join("");
}

function getReverse(array) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}
