function kadanesAlgorithm(array) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  let minIndex = 0;
  let maxIndex = 0;
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    const temp = array[i] + currSum;
    if (temp < array[i]) {
      s = i + 1;
    }
    currSum = Math.max(temp, array[i]);
    if (currSum > maxSum) {
      console.log(s);
      maxIndex = i;
      minIndex = s;
      maxSum = currSum;
    }
  }
  return { maxSum, minIndex, maxIndex };
}
console.log(kadanesAlgorithm([-6, -3, -4, -11, -2]));
