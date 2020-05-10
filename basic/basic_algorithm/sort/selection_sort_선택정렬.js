/**
 * Selection Sort 선택 정렬
 * 시간복잡도: O(N^2)
 * 반복문 두번 중첩, 성능 낮음
 */

function selectionSort(array) {
  let minIndex, temp;
  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // 최솟값을 찾기 위한 반복문
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

selectionSort([4, 3, 6, 7, 1, 2]);
