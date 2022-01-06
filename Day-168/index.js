// Maximum Sum Rectangle In A 2D Matrix - Kadane's Algorithm Applications (Dynamic Programming)

function getMaxSumRectangle(array) {
  const rows = array.length;
  const cols = array[0].length;

  let left = 0;
  let right = 0;
  let top = 0;
  let bottom = 0;

  for (let i = 0; i < col; i++) {
    let leftPtr = i;
    for (let j = 0; j < col; j++) {
      let rightPtr = j;
      let maxRunningSum = [];
      for (let k = 0; k < rows; k++) {
        let sum = 0;
        for (let l = leftPtr; l < rightPtr; l++) {
          sum += array[k][l];
        }
        maxRunningSum.push[sum];
      }
      // kadane's algorithm to find top and bottom
      kadaneAlgo(maxRunningSum);
    }
  }
}
function kadaneAlgo(array) {
  let currSum = -Infinity;
  let maxsum = -Infinity;
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    currSum = currSum + array[i];
    if (currSum > maxsum) {
      // maxIndex =
    }
    // currSum = Math.max(array[i], currSum + array[i]);
    // maxsum = Math.max(maxsum, currSum);
  }
}
