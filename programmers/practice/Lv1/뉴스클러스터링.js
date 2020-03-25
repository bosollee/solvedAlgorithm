/**
 * 자카드 유사도
 * 조건: 대소문자 무시, 특수 문자가 들어있는 경우는 원소 버림(영문자만 유효)
 * 두글자씩 끊어서 원소로.
 */

// 다중집합 만드는 함수
function multiSet(str) {
  [...str].forEach(element => {});
}

function solution(str1, str2) {
  var answer = 0;

  multiSet(str1);
  multiSet(str2);

  return 소수점아래버리고정수만출력하는메소드(answer * 65536);
}

// test
solution("FRANCE", "french"); // answer: 16384
// solution("handshake", "shake hands"); // answer: 65536
// solution("aa1+aa2", "AAAA12"); // answer: 43690
// solution("E=M*C^2", "e=m*c^2"); // answer: 65536
