/**
 * Merge Sort 병합 정렬
 * 시간복잡도: O(NlogN)
 * 재귀 함수 사용(분할 정복 알고리즘)
 */

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // 두 배열의 첫 원소를 비교, 더 작은 수를 결과에 넣어주기.
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어주기.
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = Math.floor(array.length / 2); // 대략 반으로 나눔
  let left = array.slice(0, pivot);
  let right = array.slice(pivot, array.length);
  return (answer = merge(mergeSort(left), mergeSort(right))); // 재귀적으로 쪼개고 합치기
}

mergeSort([4, 3, 6, 7, 1, 2]);
