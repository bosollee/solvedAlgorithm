/*
    풀이:
    배열의 가운데 글자 if문 짝/홀
    주의:
    짝수일 경우, 가운데 두 글자 = /2 -1한 값 + /2 한 값.
    홀수일 경우, /2하면 소수이므로 -0.5 한다.
*/

function solution(s) {
    let answer = '';
    if(s.length % 2 == 0) {
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        answer = s[s.length / 2 - 0.5];
    }
    return answer;
}

// test
solution("abcde")
solution("qwer")