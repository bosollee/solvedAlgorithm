/*
    풀이:
    a부터 b까지의 합 return.
    주의:
    먼저 대소관계 확인, 같다면 값 그대로 return.
*/

function solution(a, b) {
    let answer = 0;
    let big, small;
    if (a < b) {
        big = b;
        small = a;
    } else if (a > b) {
        big = a;
        small = b;
    } else {
        answer = a;
    } for (let i = small; i <= big; i++) {
        answer += i;
    }
    return answer;
}

// test
solution(3, 5);
solution(3, 3);
solution(5, 3);