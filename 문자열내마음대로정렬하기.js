/*
    풀이:
    문자열의 인덱스 n번째 글자 기준 오름차순 sort(fucntion(a,b){custom}).
    주의:
    같은 문자열일 경우, 사전순. 따라서 이때는 문자열 전체를 비교한다. 
    sort() 내부의 compareFunction은 앞이 크면 1, 뒤가 크면 -1, 같으면 0을 반환.
*/

function solution(strings, n) {
    strings.sort((a,b) => {
        var first = a[n];
        var second = b[n];
        if (first === second) {
            return (a > b) - (a < b);
        }else{
            return (first > second) - (first < second);
        }
    })
    return strings;
}

// test
solution(['sun', 'bed', 'car'], 1);
solution(['abce', 'abcd', 'cdx'], 2);