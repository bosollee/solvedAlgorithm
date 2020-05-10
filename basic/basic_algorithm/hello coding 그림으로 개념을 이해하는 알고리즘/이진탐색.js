/*
 *이진탐색
 * O(logN)
 */

function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return undefined;
}
console.log(binary_search([1, 3, 5, 7, 9], 3));
console.log(binary_search([1, 3, 5, 7, 9], -1));
