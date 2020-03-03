/*
    풀이: 
    문자열 길이 4, 6, 숫자인지
    주의:
    매개변수가 숫자인지 검사하는 함수(Not a Number) isNaN() 사용. -> 지수형식("1e22")인 경우 error.
    정규식을 사용하면 해결.
*/

// 지수형식일 경우 error인 코드.
function solution(s) {
    let result;
    if ((s.length === 4 || s.length === 6) && !isNaN(s)) {
        result = true
    } else {
        result = false
    }
    return result;
}

// 정규식으로 바꾼 최종 코드.
function solution(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }

// test
console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('aaa234'));