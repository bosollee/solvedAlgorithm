/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    debugger;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i);
        result.push(j);
        break;
      }
    }
  }
  console.log(result);
  return result;
};

// test
twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
