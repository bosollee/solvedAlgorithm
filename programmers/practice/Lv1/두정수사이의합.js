function solution(a, b) {
  let answer = 0;
  if (a == b) {
    return a;
  }
  let big = a < b ? b : a;
  let small = a < b ? a : b;
  for (let i = small; i <= big; i++) {
    answer += i;
  }
  return answer;
}

// test
solution(3, 5);
solution(3, 3);
solution(5, 3);
