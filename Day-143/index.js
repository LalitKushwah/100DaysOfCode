/**
 * nonConstructibleChange
 * [1,2,3,4]
 * Result: 11
 * Possible change: 1,2,3,4,5,6,7,8,9,10,114
 */

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  currentChangeCreated = 0;
  for (let coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated = currentChangeCreated + coin;
  }
  return currentChangeCreated + 1;
}
