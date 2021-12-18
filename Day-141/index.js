/**
 * Valid subsquence
 * [1,2,3,4,5]
 * [2,4,5]
 */

function isValidSubsequence(array, sequence) {
  let arrayPointer = 0;
  let sequencePointer = 0;
  while (arrayPointer < array.length && sequencePointer < sequence.length) {
    if (array[arrayPointer] !== sequence[sequencePointer]) {
      arrayPointer++;
    } else {
      sequencePointer++;
      arrayPointer++;
    }
  }
  return sequencePointer === sequence.length;
}
