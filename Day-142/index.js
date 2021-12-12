// sorted squared array

function sortedSquaredArray(array) {
  const result = new Array(array.length).fill(0);
  let lowerIdx = 0;
  let highIdx = array.length - 1;
  let fillIdx = array.length - 1;
  while (lowerIdx <= highIdx) {
    const smallerValue = array[lowerIdx];
    const higherValue = array[highIdx];
    if (Math.abs(smallerValue) > Math.abs(higherValue)) {
      result[fillIdx] = smallerValue * smallerValue;
      lowerIdx++;
    } else {
      result[fillIdx] = higherValue * higherValue;
      highIdx--;
    }
    fillIdx--;
  }
  return result;
}

function sortedSquaredArray(array) {
  const transformedArray = array.map((ele) => ele * ele);
  transformedArray.sort((a, b) => a - b);
  return transformedArray;
}
