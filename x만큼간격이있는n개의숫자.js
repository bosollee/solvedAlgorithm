/**
 * 풀이:
 * x부터 시작해 x씩 증가하는 숫자를 n개 가진 리스트 return.
 * 
 */

function solution(x, n) {
    let answer = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += x;
        answer.push(sum);        
    }

    return answer;
}

// test
solution(2, 5)
solution(4, 3)
solution(-4, 2)