function solution(arr) {
  let min = Math.min.apply(0, arr);
  arr.splice(arr.indexOf(min), 1);
  if (arr.length === 0) arr.push(-1);
  return arr;
}

// test
solution([4, 3, 2, 1]);
solution([10]);
