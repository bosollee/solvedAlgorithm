/*
 * 풀이:
 * 홀짝 문자열 합치기
 */

function solution(n) {
    let answer = '';
    let watermelon = ['수', '박'];

    if (n % 2 == 0) {
        for (let i = 0; i < n/2; i++) {
            answer = answer + watermelon[0] + watermelon[1]
        }
    } else {
        for (let i = 0; i < n/2-1; i++) {
            answer = answer + watermelon[0] + watermelon[1]
        } answer += watermelon[0]
    }
    return answer;
}

// test
solution(3);
solution(4);