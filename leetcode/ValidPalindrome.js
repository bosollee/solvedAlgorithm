/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reverse = s.split("").reverse().join("");
  return s === reverse;
};

// test
isPalindrome("a.");
// isPalindrome("a");
// isPalindrome(" ");
// isPalindrome('')
isPalindrome("0p");
// isPalindrome("race a car");
// isPalindrome("ab");
isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car");
