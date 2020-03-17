/*\
    풀이:
    문자열 배열로 split, 오름차순 sort, 내림차순 reverse, 문자열로 join.
    주의:
    sort()은 오름차순이기에, 내림차순 하려면 reverse.
    대문자는 소문자보다 작다.

*/
function solution(s) {
    return s.split('').sort().reverse().join('');
}

// test
solution("Zbcdefg");