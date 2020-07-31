/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const temp = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  const keys = Object.keys(temp);
  if (s.length === 1) {
    // 괄호가 한개일 경우
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (keys.includes(s[i])) {
      // 열린 괄호
      stack.push(s[i]);
    } else {
      // 닫힌 괄호
      if (temp[stack[stack.length - 1]] === s[i]) {
        // 짝 맞음
        stack.pop();
      } else {
        // 짝 안맞음
        return false;
      }
    }
  }
  return !stack.length; // stack이 비었다면(짝 맞음) true 반환
};

// test
// isValid("((");
// isValid("");
// isValid("(");
// isValid("()");
// isValid("()[]{}");
// isValid("(]");
// isValid("([)]");
// isValid("{[]}");
