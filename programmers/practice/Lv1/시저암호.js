/**
 * 풀이:
 * 밀어서 바꾸는 암호화 방식.
 * 대문자/소문자라면(>90) n만큼 이동한 값에서 -97 or -65, 알파벳수만큼 %26 나머지, 다시 +97 or +65.
 * 주의:
 * A-Z는 65부터 90, a-z는 97부터 122
 */

function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") result += " ";
    else
      result += String.fromCharCode(
        s.charCodeAt(i) > 90
          ? ((s.charCodeAt(i) + n - 97) % 26) + 97
          : ((s.charCodeAt(i) + n - 65) % 26) + 65
      );
  }
  return result;
}

// test
solution("AB", 1);
solution("z", 1);
solution("a B z", 4);
