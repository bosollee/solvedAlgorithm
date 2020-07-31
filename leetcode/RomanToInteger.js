/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  if (!s || s.length === 0) {
    return 0;
  }
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let len = s.length - 1;
  let result = map.get(s[len]);

  while (len > 0) {
    const curr = map.get(s[len]);
    const prev = map.get(s[len - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }
    len--;
  }
  return result;
};

// test
romanToInt("MCMXCIV");
