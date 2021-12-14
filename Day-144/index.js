/**
 * aabccbde
 * result: d
 */

function firstNonRepeatingCharacter(string) {
  const map = {};
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) map[string[i]] = map[string[i]] + 1;
    else map[string[i]] = 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] === 1) return i;
  }
  return -1;
}
