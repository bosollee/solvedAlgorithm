/**
 * 퀵 정렬 ** 수정 필요~!
 */

function quickSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let less = [],
      greater = [];
    for (let i = 1; i < array.length; i++) {
      if (i <= pivot) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
      console.log(quickSort(less), [pivot], quickSort(greater));
      return quickSort(less), [pivot], quickSort(greater);
    }
  }
}
console.log(quickSort([2, 4, 6, 3, 1]));
