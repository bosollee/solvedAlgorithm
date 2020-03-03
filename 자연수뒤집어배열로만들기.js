/**
 * 풀이:
 * 자연수 문자열로 toString(), 문자열 배열로 [...문자열], 뒤집기 reverse(), 숫자로 Number()
 */

function solution(n) {
    let n_arr = [...n+''];
    n_arr = n_arr.reverse()
    for (let i in n_arr) {
        n_arr[i] = Number(n_arr[i]);
    }
    return n_arr;
}

// test
solution(12345);