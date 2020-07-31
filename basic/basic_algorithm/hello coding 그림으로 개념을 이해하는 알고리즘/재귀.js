/**
 * 재귀
 */

// 카운트다운
function countdown(i) {
  console.log(i);
  if (i <= 1) return;
  else countdown(i - 1);
}
// countdown(5);

// 팩토리얼
function factorial(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
factorial(5);
