function solution(x) {
  let arr = [...String(x)];
  let sum = arr.reduce((a, b) => Number(a) + Number(b));
  let answer = x % sum === 0 ? true : false;
  return answer;
}

// test
solution(10); // return true
solution(11); // return true
solution(12); // return false
solution(13); // return false
