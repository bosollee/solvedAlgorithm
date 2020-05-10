/**
 * 깊이/너비 우선 탐색(DFS/BFS)
 */

function solution(numbers, target) {
  let answer = 0;

  function calculate(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    // console.log("idx, sum, answer", idx, sum, answer);
    calculate(idx + 1, sum + numbers[idx]);
    calculate(idx + 1, sum - numbers[idx]);
  }
  calculate(0, 0);
  return answer;
}

// test
solution([1, 1, 1, 1, 1], 3); // return 5
