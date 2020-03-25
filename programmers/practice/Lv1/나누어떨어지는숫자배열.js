/* 
    풀이:
    나누어 떨어지는 값을 오름차순 sort(function(a,b){return a-b})하여 return.
    주의:
    나누어 떨어지는 값이 없다면 -1 return.
*/

function solution(arr, divisor) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor == 0) {
            result.push(arr[i]);
            result.sort(function(a,b){return a-b})
        }
    } if(result == '') {
        result.push(-1);
    }
    return result;
}

// test
solution([5, 9, 7, 10], 5)
solution([2, 36, 1, 3], 1)
solution([3,2,6], 10)