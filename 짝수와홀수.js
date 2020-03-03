/*
 * 풀이:
 * if문 짝홀
 */

function solution(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// test
solution(3);
solution(4);