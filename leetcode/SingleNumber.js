/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  console.log(sortedArr);
  for (i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1] || nums[i + 1] === undefined) {
      console.log(nums[i], nums[i + 1]);
      return nums[i];
    }
  }
};

// test
singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
