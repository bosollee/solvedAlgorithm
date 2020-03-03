/**
 * 풀이:
 * 문자열 전체길이-4만큼 '*' repeat.
 * 문자열 전체길이-4부터 전체길이까지 뒷번호 slice 복제.   
 */

function solution(phone_number) {
    let answer = '';
    answer = '*'.repeat(phone_number.length-4) + phone_number.slice(phone_number.length -4, phone_number.length);
    return answer;
}

// test
solution('01033334444');
solution('027778888');