/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = s.trim().split(" ");
  //   console.log(result, result[result.length - 1].length);
  return result[result.length - 1].length
    ? result[result.length - 1].length
    : 0;
};

// test
// lengthOfLastWord("Hello World"); //5
lengthOfLastWord("a "); //1
