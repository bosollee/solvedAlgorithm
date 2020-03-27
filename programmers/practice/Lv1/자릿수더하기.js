function solution(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}

solution(123);
solution(1987523);
