function solution(s) {
  let result = parseInt(s);
  if ((s.length === 4 || s.length === 6) && s == result) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// 참고할만한 풀이: 정규식 사용.
function _solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// test
console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("aaa234"));
console.log(solution("1e34"));
