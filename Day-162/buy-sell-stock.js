function findProfit(prices, k) {
  if (k <= 0) return 0;
  let n = prices.length;
  const profit = Array(n).fill(0);
  // max selling price
  let maxPrice = prices[n - 1];
  // min buying price
  let minPrice = prices[0];
  for (let i = n - 2; i >= 0; i--) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }
    profit[i] = Math.max(profit[i + 1], maxPrice - prices[i]);
  }

  while (k - 1 > 0) {
    console.log(k);
    for (let i = 1; i < n; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
      profit[i] = Math.max(profit[i - 1], profit[i] + prices[i] - minPrice);
    }
    k--;
  }

  return profit[n - 1];
}
console.log(findProfit([1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5], 1));
