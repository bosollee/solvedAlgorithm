/**
 * 풀이:
 * 소수 찾기. (3부터 n까지)%(2부터 i까지)가 !=0 이라면, 소수 check.  
 * check 된다면 count++ 하여 return.
 * 주의:
 * 1은 소수가 아니므로 제외.
 */

// 정상 동작, 시간 초과. 다른 방법 시도 예정.
function solution(n) {
    let count = 1;

    for (let i = 3; i <= n; i++) {
        let check = false;
        for (let j = 2; j < i; j++) {
            if (i % j != 0) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (check) {
            count++;
        }
    }
    return count;
}

// test
solution(10);
solution(5);