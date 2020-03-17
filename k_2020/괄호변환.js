/**
 * 풀이:
 * 1. 개수가 같다면
 * 2-1. 짝이 맞다면 반환.
 * 2-2. 아니라면 짝 맞게 변환.
 *      - 처리 안 된 뒷 문자열은 재귀.
 *      - 반전, 맨 앞 뒤도 반대로 추가.
 */
function solution(w) {
  let answer = "";
  let left = 0;
  let right = 0;
  let check = false;

  // 빈 문자열이면 반환
  if (w.length === 0) {
    return "";
  }

  for (let i = 0; i < w.length; i++) {
    if (w[i] === "(") left++;
    if (w[i] === ")") right++;

    // 올바른 괄호 문자열이 아니면 체크
    if (left < right) {
      check = true;
    }

    if (left === right) {
      if (check === true) {
        answer += "(";
        answer += solution(w.slice(i + 1, w.length));
        answer += ")";

        for (let j = 1; j < i; j++) {
          if (w[j] === "(") answer += ")";
          if (w[j] === ")") answer += "(";
        }
        return answer;
      } else {
        answer += w.slice(0, i + 1);
        answer += solution(w.slice(i + 1, w.length));
        return answer;
      }
    }
  }
}

solution("(()())()"); //"(()())()"
solution(")("); //"()"
solution("()))((()"); // "()(())()"
