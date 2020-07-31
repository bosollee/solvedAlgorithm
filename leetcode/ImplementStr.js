/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  let result = haystack.indexOf(needle);
  //   console.log(result);
  return result;
};

// test
strStr("hello", "ll");
strStr("aaaaa", "bba");
