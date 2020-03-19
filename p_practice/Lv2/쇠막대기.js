/**
 * 풀이:
 * "("가 나오면 stack에 "(" push,
 * ")"가 나오면 stack에서 "(" pop, 스택의 괄호 갯수 answer에 저장.
 * @param {string} arrangement
 */

function solution(arrangement) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === "(") {
      stack.push(arrangement[i]);
    } else {
      stack.pop();
      if (arrangement[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer++;
      }
    }
  }
  return answer;
}

// test
solution("()(((()())(())()))(())"); // return 17
