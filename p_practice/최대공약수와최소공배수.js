/**
 * 풀이:
 * 최대공약수 공식: 유클리드호제법
 * 최소공배수 공식: 두 수의 곱 / 최대공약수
 */

function solution(n, m) {
    var answer = [];
    let first_n = n;
    let first_m = m;

    while (m != 0) {
        let tmp = m;
        m = n % m;
        n = tmp;
    } 
    answer.push(n);    // 최대공약수
    answer.push(first_n * first_m / n);     //최소공배수
    return answer;
}

// test
solution(3, 12);
solution(2, 5);