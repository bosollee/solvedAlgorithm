/**
 * 풀이:
 * 1. 문자열 n개 단위로 잘라서 비교하며 압축
 * 2. 문자열 n개 단위로 증가하며 input과 비교
 *  - 동일 문자열 나오면 count +1
 *  - 새로운 문자열 나오면 비교할 문자열 변경 후, 결과에 추가.
 * 3. 2번 반복.
 */

function solution(s) {
  let answer = s;

  for (let i = 1; i <= s.length / 2; i++) {
    let result_str = "";
    let slice_str = s.slice(0, i);
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      const comp_str = s.slice(j, j + i);
      if (slice_str === comp_str) {
        count += 1;
      } else {
        result_str += count > 1 ? count + slice_str : slice_str;
        slice_str = comp_str;
        count = 1;
      }
    }
    if (slice_str) {
      result_str += count > 1 ? count + slice_str : slice_str;
    }
    if (answer.length > result_str.length) {
      answer = result_str;
    }
  }
  return answer.length;
}

// test
solution("aabbaccc"); // result 7
solution("ababcdcdababcdcd"); // result 9
solution("abcabcdede"); // result 8
solution("abcabcabcabcdededededede"); // result 14
solution("xababcdcdababcdcd"); // result 17
