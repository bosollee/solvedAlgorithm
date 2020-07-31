/**
 * @param {number} n
 * @return {number}
 * 1 <= n <= 45
 * 피보나치
 */
var climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  const steps = [1, 2];
  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n - 1];
};

// test
console.log(climbStairs(2), climbStairs(3));
// 2 3
