/**
 * 풀이:
 * while문으로 %10 자릿수 더하기, n은 정수타입 parseInt(n/10)
 */

function solution(n) {
    let sum = 0;
    while(n > 0){
        sum += n % 10;
        n = parseInt(n/10);
    }
    return sum;
}

solution(123);
solution(1987523);
solution();