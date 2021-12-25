// maximum sum subarry [1,2,3,4,5,5,-1] 0f size K

function findMaxSumSubArray(arr, k) {
  let start = 0;
  let end = k - 1;
  let max = Number.NEGATIVE_INFINITY;
  while (end !== arr.length - 1) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += arr[i];
      max = Math.max(sum, max);
    }
    start++;
    end++;
  }
  return max;
}
console.log(findMaxSumSubArray([1, 2, 3, 4, 5, 5, -1], 3));
