/**
 * 선택 정렬
 */

function selectionSort(arr) {
  let minIdx, tmp;
  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
}

selectionSort([5, 3, 6, 2, 10]);
