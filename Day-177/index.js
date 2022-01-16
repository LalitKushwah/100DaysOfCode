function isMonotonic(array) {
  if (array.length < 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breakDirections(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}
function breakDirections(direction, prev, current) {
  const diff = current - prev;
  if (direction > 0) return diff < 0;
  return diff > 0;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
