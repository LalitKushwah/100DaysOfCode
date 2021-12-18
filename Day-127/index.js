var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const result = target - num;
    if (result in map) {
      return [map[result], i];
    }
    map[num] = i;
  }
  return [];
};


const maxSubArray = nums => nums.reduce(
  ([localMax, globalMax], curr) => [
    Math.max(curr, localMax + curr),
    Math.max(curr, localMax + curr, globalMax),
  ],
  [-Infinity, -Infinity]
)[1];

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
