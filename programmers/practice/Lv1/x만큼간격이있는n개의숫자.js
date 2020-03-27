function solution(x, n) {
  let answer = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += x;
    answer.push(sum);
  }

  return answer;
}

// test
solution(2, 5);
solution(4, 3);
solution(-4, 2);
