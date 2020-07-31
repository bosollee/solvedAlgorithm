/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
  return result <= 0x7fffffff && result >= -0x80000000 ? result : 0;
};

//test
reverse(123);
reverse(-123);
reverse(120);

// Output: 321
// Output: -321
// Output: 21
