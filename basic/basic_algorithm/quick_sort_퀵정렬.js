/**
 * Quick Sort 퀵 정렬
 * 시간복잡도: O(N^2)
 * 분할 정복 알고리즘. 합병 정렬보다 두배 빠르기 때문에 자주 쓰임(.sort()할 때 내부적으로 사용된다)
 * 같은 숫자들 정렬할 경우 순서가 섞일 수 있음.
 */
function partition(array, left, right, pivotIndex) {
  // 정렬하는 부분
  let temp,
    pivot = array[pivotIndex];
  while (left <= right) {
    // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어가기
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면 바꾸기
    if (left <= right) {
      temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  // 마지막으로 기준과 만난 수를 바꿔주기. (현 기준 위치: i)
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp;
  return left;
}

function quickSort(array, left, right) {
  if (!left) {
    left = 0;
  }
  if (!right) {
    right = array.length - 1;
  }
  var pivotIndex = right; // 기준: 배열 가장 오른쪽 수
  pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1 하는 이유: 기준(현재 right)을 제외하고 정렬하기 위함.
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
  return array;
}

console.log(quickSort([4, 3, 6, 7, 1, 2]));
quickSort([4, 3, 6, 7, 1, 2]);
