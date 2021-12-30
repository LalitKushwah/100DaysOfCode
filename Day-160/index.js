var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]] += 1;
    else map[nums[i]] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    console.log(map[nums[i]]);
    if (map[nums[i]] < 2) return nums[i];
  }
};
console.log(singleNumber([4, 1, 1, 2, 2]));

function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("LalitKushwah"));

function hasValidFrequency(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const input = str[i];
    if (map[input]) map[input] += 1;
    else map[input] = 1;
  }
  const values = Array.from(Object.values(map));
  return values.every((value) => value === values[0]);
}
// console.log(hasValidFrequency("aaabbbcccd"));

function isValidParenthesis(input) {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
    ">": "<",
  };
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const str = input[i];
    if (Object.values(map).includes(str)) stack.push(str);
    else {
      const top = stack[stack.length - 1];
      if (!top) return false;
      if (map[str] === top) {
        stack.pop();
      } else return false;
    }
    console.log(stack);
  }
  return stack.length === 0;
}
// console.log(isValidParenthesis("(])"));
