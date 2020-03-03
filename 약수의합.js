/**
 * 풀이:
 * for문 나누어 떨어진다면 더하기.
 */

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i
        }
    }
    return answer;
}

// test
solution(12);
solution(5);