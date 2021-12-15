/**
 *
 * Product Sum
 * [1,2,[3,4],5,6,[7,8, [9,10]]]
 * 1+2+(2*(3+4))+5+6,(2*(7+8+(3*(9+10))))
 *
 */

function productSum(array, multiplier = 1) {
  let sum = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      sum += productSum(item, multiplier + 1);
    } else {
      sum += item;
    }
  }
  return sum * multiplier;
}
