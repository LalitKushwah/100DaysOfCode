// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// function maxSubarraySum(arr, n)

// console.log(maxSubarraySum([1, 2, 5, -20, 8, -10, 5], 2)) 7; 
// console.log(maxSubarraySum([-1, -2, -5, -20, -8, -10, -5], 2)); // -3

// Time Complexitiy : O(n^2)
function maxSubarraySum(arr, n) {
    if (!n || n > arr.length) return null;
    const length = arr.length;
    const temp = [];
    for (let i = 0; i < length; i++) {
      let currentIndexMax = arr[i];
      for (let j = i+1; j<(i+n); j++) {
        if (arr[j]) {
          currentIndexMax = currentIndexMax + arr[j];
        }
      }
      temp.push(currentIndexMax)
    }
    return Math.max(...temp);
  }
  
  // Time Complexitiy: O(n)
  function maxMagicalSubarraySum(arr, n) {
    if (!n || n > arr.length) return null;
    let slide = [];
    let max = 0;
  
    for (let i=0; i<n; i++) {
       slide.push(arr[i]);
    }
    let slideSum = slide.reduce((acc, cur) => acc + cur);
    max = slideSum;
    for (let i=n; i<arr.length;i++) {
      slideSum = slideSum - arr[i-n] + arr[i];
      max = Math.max(slideSum, max);
    }
    return max;
  }
  
  
  console.log(maxSubarraySum([1, 2, 5, -20, 8, -10, 5], 2));
  console.log(maxSubarraySum([-1, -2, -5, -20, -8, -10, -5], 2));
  
  // uncomment to check
  // console.log(maxMagicalSubarraySum([1, 2, 5, -20, 8, -10, 5], 2));
  // console.log(maxMagicalSubarraySum([-1, -2, -5, -20, -8, -10, -5], 2))
  