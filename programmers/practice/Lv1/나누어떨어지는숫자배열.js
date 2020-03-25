function solution(arr, divisor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      result.push(arr[i]);
    }
  }
  if (result == "") {
    result.push(-1);
  }
  result.sort(function(a, b) {
    return a - b;
  });
  console.log(result);
  return result;
}

// test
solution([5, 9, 7, 10], 5); // return [5,10]
solution([2, 36, 1, 3], 1); // return [1,2,3,36]
solution([3, 2, 6], 10); // return [-1]
