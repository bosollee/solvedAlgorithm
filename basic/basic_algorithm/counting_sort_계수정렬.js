/**
 * Counting Sort 계수 정렬
 * 시간복잡도: O(N+k), 정렬할 수의 최대값에 영향을 받는 알고리즘.
 * N보다 작으면 O(N), N보다 매우 큰 수이면 O(무한)
 * 비교 정렬이 아닌, 안정 정렬. 같은 숫자라도 순서가 섞이지 않음.
 */

function countingSort(array, k) {
  let count = [],
    result = [];
  // 모든 숫자의 개수를 0으로 초기화
  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }
  // 숫자의 개수를 세어 저장
  for (let j = 0; j < array.length; j++) {
    count[array[j]] += 1;
  }
  // 누적합 구하기
  for (i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }
  // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자 넣기
  for (j = 0; j < array.length; j++) {
    result[count[array[j]] - 1] = array[j];
    count[array[j]]--;
  }
  return result;
}

countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4);
