// knapsack 0-1

function knapsack(wt, val, W, n) {
  if (n === 0 || W === 0) return 0;
  if (wt[n - 1] > W) return knapsack(wt, val, W, n - 1);
  else {
    return Math.max(
      val[n - 1] + knapsack(wt, val, W - wt[n - 1], n - 1),
      knapsack(wt, val, W, n - 1)
    );
  }
}

// max subset adjacent
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.\
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = Math.max(sum, sum + array[i]);
  }
  return sum;
}
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));

let cal = 0;
let cache = {};
function factorial(n) {
  cal++;
  if (n === 0) return 1;
  if (cache[n]) return cache[n];
  else {
    cache[n] = n * factorial(n - 1);
    return cache[n];
  }
}
// console.log(factorial(20));
// console.log(cal);

// console.log(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 10, 4));
