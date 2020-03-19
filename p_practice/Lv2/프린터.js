/**
 * 풀이:
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
 *    J를 대기목록의 가장 마지막에 넣습니다.
 * 3. 그렇지 않으면 J를 인쇄합니다.
 *
 * @param {array} priorities
 * @param {number} location
 */

function solution(priorities, location) {
  let target_index = location;
  let answer = 1;
  let first = 0;

  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some((val, idx) => val > first)) {
      priorities.push(first);
    } else {
      if (target_index === 0) break;
      else {
        answer++;
        // target_index--;
      }
    }
    if (target_index === 0) {
      target_index = priorities.length - 1;
    } else {
      target_index--;
    }
  }
  return answer;
}

// test
solution([2, 1, 3, 2], 2); // return 1
solution([1, 1, 9, 1, 1, 1], 0); // return 5
solution([2, 3, 2, 3], 2);
