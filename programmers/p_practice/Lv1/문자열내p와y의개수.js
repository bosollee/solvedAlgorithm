/*
    풀이:
    charAt로 p, y 개수 비교, 같으면 true, 다르면 false.
    주의:
    개수 0이면 true return.
*/

function solution(s){
    s = s.toLowerCase();
    let count_p = 0;
    let count_y = 0;

    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i) === 'p') {
            count_p++;
        }else if(s.charAt(i) === 'y') {
            count_y++;
        }
    }
    if (count_p === 0 && count_y === 0) {
        return true;
    } else if(count_p == count_y) {
        return true;
    } else {
        return false;
    }
}

// test
solution('pPoooyY');
solution('Pyy');