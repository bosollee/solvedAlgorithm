/**
 * 풀이:
 * 문자열 변환, 배열로 spread, sort(), reverse(), join(''), Number().
 */

function solution(n) {
    var answer = 0;
    let str = n+'';
    let arr = [...str];
    arr = arr.sort().reverse().join('');
    return Number(arr);
}

// test
solution(118372);
