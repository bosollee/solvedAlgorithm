/**
 * 풀이: 재귀
 * 1. 부호만 바꿔서 연산
 * 2. 만약 한번 다 돌았는데 원하는 결과값이면 answer 카운트, 반환해주기.
 * @param {array} numbers
 * @param {number} target
 */
function solution(numbers, target) {
  var answer = 0;

  function recur(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    recur(idx + 1, sum + numbers[idx]);
    recur(idx + 1, sum - numbers[idx]);
  }
  recur(0, 0);
  return answer;
}

// test
solution([1, 1, 1, 1, 1], 3); // return 5
