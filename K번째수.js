/*
    풀이:
    배열 i부터 j까지 slice, sort, k번째 수 return.
    주의:
    배열 값이 숫자이므로 .sort(function(a,b){return a-b;}) 사용.
*/

function solution(array, commands) {
    let answer = [];
    for(let i = 0; i< commands.length; i++){
        let result = array.slice(commands[i][0]-1, commands[i][1])
        result.sort(function(a,b){return a-b});
        answer.push(result[commands[i][2]-1]);
    }
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);     // test