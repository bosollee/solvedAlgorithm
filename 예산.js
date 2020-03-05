/**
 * 풀이:
 * 오름차순 sort((a, b) => a - b)
 * reduce 사용, 초기값 0으로 주고 budget보다 커질 경우 요소 pop, length return.
 */

function solution(d, budget) {
  let result = 0;
  let count = 0;

  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop;
  }
  return d.length;

  //   for (let i = 0; i < d.length; i++) {
  //     count++;
  //     result += d[i];

  //     if (result > budget) {
  //       count--;
  //       break;
  //     }
  //   }
  //   return count;
}

solution([1, 2, 3, 4, 5], 9);
solution([2, 2, 3, 3], 10);
