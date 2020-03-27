function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i % 2 !== 0 ? "수" : "박");
  }
  console.log(answer.join(""));
  return answer.join("");
}

// test
solution(3);
solution(4);
