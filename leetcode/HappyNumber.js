/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
    console.log(seen);
  }
  //   while (n !== 1) {  // time 에러.
  //     n = sumOfSquares(n);
  //     console.log(n);
  //   }
  console.log(n === 1 ? true : false);
  return n === 1 ? true : false;
};

function sumOfSquares(numString) {
  return numString
    .toString()
    .split("")
    .reduce(function (sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
}

// test
isHappy(19);
