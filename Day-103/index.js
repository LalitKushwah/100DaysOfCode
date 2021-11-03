/**
 * @param {string} s
 * @return {boolean}
 */
 const map = {
    '(':')',
    '{':'}',
    '[':']'
}
var isValid = function(s) {
  const stack = [];
    for (let i of s) {
        if (map[i]) stack.push(i);
        else {
            const last = stack.pop();
            if(i !== map[last]) {
                return false;
            }
        }
    }
    return !stack.length;
};