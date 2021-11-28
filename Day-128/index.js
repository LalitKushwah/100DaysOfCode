let rotate = function (numsa, k) {
  let final = numsa.splice(numsa.length - k);
  for (let i = 0; i < final.length; i++) {
    numsa.splice(i, 0, final[i]);
  }
  return numsa;
};

var containsDuplicate = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true;
    map[nums[i]] = true;
  }
  return false;
};

var maxSubArray = function (nums) {
  return nums.reduce(
    ([localMax, globalMax], curr) => [
      Math.max(curr, localMax + curr),
      Math.max(curr, localMax + curr, globalMax),
    ],
    [-Infinity, -Infinity]
  )[1];
};
