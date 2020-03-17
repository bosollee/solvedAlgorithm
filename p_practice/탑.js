/*
나보다 왼쪽에서 큰거 중 가장 첫번째 것.
헷갈리니까 reverse하자.

인덱스 리턴
*/

function solution(heights) {
  heights.reverse();
  console.log(heights);

  let result = heights.map((a, i) => {
    if (a < heights[i]) {
      i;
    }
  });
  console.log(result);

  var answer = [];
  return answer;
}

// test
solution([6, 9, 5, 7, 4]);
// solution([3, 9, 9, 3, 5, 7, 2]);
// solution([1, 5, 3, 6, 7, 6, 5]);
