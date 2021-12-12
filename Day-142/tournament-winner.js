/* Tournament Winner
** [
  ['India', 'Pakistan']
  ['NZ', 'India']
  ['Pakistan', 'NZ']
]
[0, 1, 1];
 { India: 0, NZ: 3, Pakistan: 6 }
*/

function tournamentWinner(competitions, results) {
  const map = {};
  for (let i = 0; i < results.length; i++) {
    const [home, away] = competitions[i];
    if (results[i] === 0) {
      map[away] = map[away] ? map[away] + 3 : 3;
      map[home] = map[home] ? map[home] : 0;
    } else {
      map[home] = map[home] ? map[home] + 3 : 3;
      map[away] = map[away] ? map[away] : 0;
    }
  }
  let max = -Infinity;
  let result;
  Object.keys(map).forEach((key) => {
    if (map[key] > max) {
      max = map[key];
      result = key;
    }
  });
  return result;
}
