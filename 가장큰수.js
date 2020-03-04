/**
 * 풀이:
 * sort()로 repeat()하여 4자릿수로 slice(0,4) 만들어 비교하여 내림차순 정렬.
 * String() 문자열 처리, map() 배열로 매핑, reduce((a,b)=>a+b)로 이어붙이기.
 * 주의:
 * 모두 0일 경우 예외처리.
 */

function solution(numbers) {
    if (numbers.reduce((a, b) => a + b) === 0) {
        return '0';
    } else {
        let answer = numbers.sort((i, j) => {
            return (String(j).repeat(4).slice(0, 4)) - (String(i).repeat(4).slice(0, 4))
        })
        let result = answer.map(s=>String(s)).reduce((a, b) => a + b);
        return result;
    }
}

// test
solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);