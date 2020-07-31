/**
 * 분할 정복
 * 1. 기본 단계
 * 2. 기본 단계가 될 때까지 나누거나 작게 만든다.
 */

// 1~n 의 수를 모두 더하기
function plus(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + plus(n - 1);
  }
}
console.log(plus(4));

// 배열의 수를 모두 더하기
function sum(arr) {}
// sum([2, 4, 6]);
