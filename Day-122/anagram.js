var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sMap = {};
  const tMap = {};
  s.split("").forEach((letter) => {
    sMap[letter] = sMap[letter] ? ++sMap[letter] : 1;
  });
  t.split("").forEach((letter) => {
    tMap[letter] = tMap[letter] ? ++tMap[letter] : 1;
  });

  const maxMap = s.length > t.length ? sMap : tMap;

  for (let k in maxMap) {
    if (tMap[k] !== sMap[k]) return false;
  }
  return true;
};
