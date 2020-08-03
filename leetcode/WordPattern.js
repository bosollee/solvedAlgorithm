/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const strArr = str.split(" ");
  if (pattern.length !== strArr.length) return false;
  const patMap = new Map();
  const strMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (
      (patMap.has(pattern[i]) && patMap.get(pattern[i]) !== strArr[i]) ||
      (strMap.has(strArr[i]) && strMap.get(strArr[i]) !== pattern[i])
    ) {
      console.log("false");
      return false;
    }
    patMap.set(pattern[i], strArr[i]);
    strMap.set(strArr[i], pattern[i]);
  }
  console.log("true");
  return true;
};

// test
wordPattern("abba", "dog cat cat dog");
wordPattern("abba", "dog cat cat fish");
wordPattern("aaaa", "dog cat cat dog");
wordPattern("abba", "dog dog dog dog");
