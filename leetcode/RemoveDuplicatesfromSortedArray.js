/**
 * @param {number[]} nums
 * @return {number}
 * 새 배열 생성 없이.
 */
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      if (nums[i] === nums[i + 1]) {
        // 이전 값과 현재 값이 다르다면 pass
        nums.splice(i, 1);
      }
    }
  }
  return nums.length;
};

// test
// removeDuplicates([1, 1, 2]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
