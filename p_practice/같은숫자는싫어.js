/*
    풀이:
    연속 숫자 제거하려면 앞뒤 비교한 뒤, 값이 달라지면 result에 push.
    주의:
    순서 유지.
*/

function solution(arr)
{
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// test
solution([1, 1, 3, 3, 0, 1, 1])
solution([4, 4, 4, 3, 3])