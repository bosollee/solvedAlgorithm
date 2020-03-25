function solution(s) {
  // 대소문자 구별하지 않음
  s = s.toLowerCase();
  let count_arr = new Array(2).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "p") {
      count_arr[0]++;
    } else if (s.charAt(i) === "y") {
      count_arr[1]++;
    }
  }
  // 하나도 없는 경우는 항상 true 반환.
  if (count_arr[0] === 0 && count_arr[1] === 0) {
    return true;
  }
  // p, y 개수 비교
  else if (count_arr[0] === count_arr[1]) {
    return true;
  } else {
    return false;
  }
}
// test
solution("pPoooyY");
solution("Pyy");
