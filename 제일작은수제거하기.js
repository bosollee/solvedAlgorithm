/**
 * 풀이:
 * 배열 복사 slice(0), 최소값 Math.min.apply(null, copy_arr) 구하기.
 * 최소값 인덱스 arr.indexOf(min), 제거 splice(index, 1)
 * 주의:
 * return 값이 없으면 -1 push.
 */

function solution(arr) {
    let min = 0;
    let copy_arr = arr.slice(0);

    min = Math.min.apply(null, copy_arr);
    arr.splice(arr.indexOf(min),1);

    if (arr.length === 0) {
        arr.push(-1);
    }
    return arr;
}

// test
solution([4, 3, 2, 1]);
solution([10]);