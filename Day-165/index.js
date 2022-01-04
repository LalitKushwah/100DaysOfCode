function isValidString(input) {
  input = input.split("");
  const frequencyMap = {};
  input.forEach((elm) => {
    if (frequencyMap[elm]) frequencyMap[elm] += 1;
    else frequencyMap[elm] = 1;
  });

  let minValue = Number.POSITIVE_INFINITY;
  Object.values(frequencyMap).forEach((elm) => {
    if (elm < minValue) minValue = elm;
  });
  console.log(minValue);
  let largestValue = 0;
  Object.values(frequencyMap).forEach((elm) => {
    if (elm > minValue) {
      largestValue += elm - minValue;
    }
  });

  const easy = largestValue === 0;
  const hard = largestValue === 1;
  return easy || hard;
}
console.log(isValidString("abbcc"));
console.log(isValidString("bbcc"));
console.log(isValidString("bbccddeeee"));
