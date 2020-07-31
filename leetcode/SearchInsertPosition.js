/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (nums.indexOf(target) === -1) {
    nums.push(target);
    nums.sort((a, b) => a - b);
  }
  console.log(nums.indexOf(target));
  return nums.indexOf(target);
};

// searchInsert([3, 5, 7, 9, 10], 8);
// // Output: 3
// searchInsert([1, 3, 5, 6], 5);
// // Output: 2
// searchInsert([1, 3, 5, 6], 2);
// // Output: 1
// searchInsert([1, 3, 5, 6], 7);
// // Output: 4
// searchInsert([1, 3, 5, 6], 0);
// // Output: 0
