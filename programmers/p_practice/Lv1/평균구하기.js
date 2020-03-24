/*
 * 풀이:
 * 평균은 합을 배열 길이만큼 나눈 값
 */

function solution(arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

// test
solution([1, 2, 3, 4]);
solution([5, 5]);