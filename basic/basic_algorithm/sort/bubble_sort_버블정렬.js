/**
 * Bubble Sort 버블 정렬
 * 시간복잡도: O(N^2)
 * 반복문 두번 중첩, 성능 낮음
 */

function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    // 순차적으로 비교하기 위한 반복문
    for (let j = 0; j < array.length - 1 - i; j++) {
      // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (array[j] > array[j + 1]) {
        // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort([4, 3, 6, 7, 1, 2]);
