const array1 = [1, 4, 9, 16];

function getFirstRecurringChar(array1) {
  const map = {};
  for (let i = 0; i < array1.length; i++) {
    if (map[array1[i]]) return array1[i];
    map[array1[i]] = true;
  }
  return false;
}
console.log(getFirstRecurringChar(array1));
