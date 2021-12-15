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

/**
 *
 * Generate Document
 * if characters frequency >= document frequency
 *
 */

function generateDocument(characters, document) {
  const charMap = {};
  const docMap = {};
  for (let i = 0; i < characters.length; i++) {
    if (charMap[characters[i]])
      charMap[characters[i]] = charMap[characters[i]] + 1;
    else charMap[characters[i]] = 1;
  }
  for (let i = 0; i < document.length; i++) {
    if (docMap[document[i]]) docMap[document[i]] = docMap[document[i]] + 1;
    else docMap[document[i]] = 1;
  }
  console.log(docMap);
  console.log(charMap);
  const docMapKeys = Object.keys(docMap);
  for (let i = 0; i < docMapKeys.length; i++) {
    if (!charMap[docMapKeys[i]]) return false;
    if (charMap[docMapKeys[i]] < docMap[docMapKeys[i]]) return false;
  }
  return true;
}
generateDocument("aheaolabbhb", "hello");
