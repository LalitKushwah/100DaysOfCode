function runLengthEncoding(string) {
  let currentLength = 1;
  let encodedString = [];
  for (let i = 1; i < string.length; i++) {
    let current = string[i];
    let previous = string[i - 1];
    if (current !== previous || currentLength === 9) {
      encodedString.push(currentLength.toString());
      encodedString.push(previous);
      currentLength = 0;
    }
    ++currentLength;
  }
  encodedString.push(currentLength.toString());
  encodedString.push(string[string.length - 1]);
  return encodedString.join("");
}
