/*
    풀이:
    배열 i부터 j까지 slice, sort, k번째 수 return.
*/

function solution(array, commands) {
    let result = [];
    for(let i = 0; i< commands[0].length; i++){
        let answer = array.slice(commands[i][0]-1, commands[i][1])
        answer.sort();
        result[i] = answer[commands[i][2]-1];
    }
    return result;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);     // test