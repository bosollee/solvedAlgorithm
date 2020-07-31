/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    if (prices[i] < min) min = prices[i];
  }
  console.log(max);
  return max;
};

// test
maxProfit([7, 1, 5, 3, 6, 4]); // 5
maxProfit([7, 6, 4, 3, 1]); // 0
