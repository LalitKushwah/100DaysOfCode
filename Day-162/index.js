/**
 * Leet Code: 79 (word match)
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 *
 */
const directions = [
  [0, 1], // right
  [0, -1], // left
  [1, 0], // down
  [-1, 0], // up
];
var exist = function (board, word) {
  const isUsed = board.map((row) => row.map((_) => false));
  const target = word.split("");
  const current = [];

  const walk = (i, j) => {
    if (i < 0 || i > board.length - 1) return false;
    if (j < 0 || j > board[0].length - 1) return false;

    if (isUsed[i][j]) return false;

    if (board[i][j] === target[0]) {
      current.push(target.shift());
      isUsed[i][j] = true;

      if (target.length === 0) {
        return true;
      }
      for (let direction of directions) {
        const [newI, newJ] = [i + direction[0], j + direction[1]];
        if (walk(newI, newJ)) {
          return true;
        }
      }
      target.unshift(current.pop());
      isUsed[i][j] = false;
    }
    return false;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (walk(i, j)) {
        return true;
      }
    }
  }
  return false;
};
