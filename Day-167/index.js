function kadanesAlgorithm(array) {
  let currSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    currSum += array[i];
    if (currSum > maxSum) maxSum = currSum;
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
}
