console.time("solutionFunction");
function solution(s) {
  let s_arr = [...s];

  let stack = [];
  for (let i = 0; i < s_arr.length; i++) {
    //   for (let i in s_arr) {
    if (stack.length === 0) {
      stack.push(s_arr[i]);
    } else {
      if (s_arr[i] === "(") {
        stack.push(s_arr[i]);
      } else {
        stack.pop();
      }
    }
  }
  let answer = stack.length === 0 ? true : false;
  console.log(answer);

  return answer;
}
console.timeEnd("solutionFunction");

// test
solution("()()"); // return true
solution("(())()"); // return true
solution(")()("); // return false
solution("(()("); // return false
