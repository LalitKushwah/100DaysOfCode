function findThreeLargestNumbers(array) {
  let first = (second = third = Number.NEGATIVE_INFINITY);
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      third = second;
      second = first;
      first = array[i];
    } else if (array[i] > second) {
      third = second;
      second = array[i];
    } else if (array[i] > third) {
      third = array[i];
    }
  }
  return [third, second, first];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
