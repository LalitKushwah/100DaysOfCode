var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  if (nums.length === 0 || nums[nums.length - 1] <= 0) {
    return 1;
  }
  for (var i = 0, k = 1; i < nums.length; ++i) {
    if (nums[i] > k) {
      return k;
    }
    k = nums[i] < k ? k : k + 1;
  }
  return nums[nums.length - 1] + 1;
};

function getCount(arr, k) {
  let count = 0;
  let tempString = "";
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    tempString = arr[i].toString();
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        tempString += arr[j].toString();
        console.log(tempString);
        res.push(tempString);
        count++;
      } else if (sum > k) break;
      else {
        tempString += arr[j].toString();
        res.push(tempString);
      }
    }
  }
  return count;
}
console.log(getCount([1, 0, 0, 1, 0, 1], 2));
