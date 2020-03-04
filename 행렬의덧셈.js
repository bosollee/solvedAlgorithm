/*
 * 풀이:
 * 2개의 이차배열 arr1과 arr2를 입력받아, sum return.
 * 이중 map() 사용.
 */

function solution(arr1, arr2) {
    // let answer = [];
    // for (let i = 0; i < arr1.length; i++) {
    //     answer[i] = [];
    //     for (let j = 0; j < arr2[i].length; j++) {
    //         answer[i][j] = arr1[i][j] + arr2[i][j];
    //     }
    // }
    // return answer;
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

// test
solution([[1,2],[2,3]], [[3,4],[5,6]]);
solution([[1],[2]], [[3],[4]]);