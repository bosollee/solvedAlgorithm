/**
 * 풀이:
 * 제곱근 Math.sqrt(), 제곱 Math.pow()
 */

function solution(n) {
  let result = Math.sqrt(n);
  return Number.isInteger(result) ? Math.pow(result + 1, 2) : -1;
}

// test
solution(121);
solution(3);
