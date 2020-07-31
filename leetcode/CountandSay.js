/**
 * @param {number} n
 * @return {string}
 *  1 ≤ n ≤ 30
 *  1: 1,
    2: 11,
    3: 21,
    4: 1211,
    5: 111221, ...
 */
var countAndSay = function (n, str = "1") {
  if (n === 1) return str;

  let newStr = "",
    count = 0,
    say = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === say) {
      count++;
    } else {
      newStr += count + say;
      count = 1;
      say = str[i];
    }
  }
  return countAndSay(n - 1, newStr + count + say);
};

// test
// console.log(countAndSay(1), countAndSay(4), countAndSay(5));
