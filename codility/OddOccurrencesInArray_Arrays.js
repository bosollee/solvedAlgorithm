// timeout error n=100,003, n=999,999

function solution(A) {
  // 배열은 항상 홀수, 짝 없는 요소는 하나
  let arr = [];

  for (let i = 0; i < A.length; i++) {
    if (arr.length === 0) {
      // 처음 값 추가
      arr.push(A[i]);
    } else {
      if (arr.indexOf(A[i]) > -1) {
        // 같은 값이 있다면 삭제
        arr.splice(arr.indexOf(A[i]), 1);
      } else {
        // 같은 값이 없다면 추가
        arr.push(A[i]);
      }
    }
  }
  console.log(arr);
  return arr[0];
}

// test
solution([9, 3, 9, 3, 9, 7, 9]); // return 7
