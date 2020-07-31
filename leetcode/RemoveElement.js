/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 새 배열 생성 없이.
 */
const removeElement = (nums, val) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    }
    nums[count] = nums[i];
    count++;
  }
  console.log(count);
  return count;
};

// test
// removeElement([3, 2, 2, 3], 3);
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
