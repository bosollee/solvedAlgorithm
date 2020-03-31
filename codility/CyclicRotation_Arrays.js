function solution(A, K) {
  let moveLength = A.length - (K % A.length);
  console.log(moveLength);
  let moveArr = A.slice(0, moveLength);
  console.log(moveArr);
  A.splice(0, moveLength);
  console.log(A);
  let answer = A.concat(moveArr);
  console.log(answer);
  return answer;
}

// test
// solution([3, 8, 9, 7, 6], 3); // return  [9, 7, 6, 3, 8]
// solution([0, 0, 0], 1); // return [0,0,0]
// solution([1, 2, 3, 4], 4); // return [1,2,3,4]
solution([-1, -2, -3, -4, -5, -6], 10);
