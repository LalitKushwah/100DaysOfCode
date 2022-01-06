function kadanesAlgorithm(array) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    const temp = array[i] + currSum;
    if (array[i] > temp) {
      currSum = array[i];
    } else if (temp > array[i]) {
      currSum = temp;
    } else if (currSum < 0) {
      minIndex = i + 1;
    }
    if (currSum > maxSum) {
      maxIndex = i;
      maxSum = currSum;
    }
  }
  return { maxSum, minIndex, maxIndex };
}
console.log(kadanesAlgorithm([-2, 9, -11, 6]));
