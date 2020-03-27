function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

// test
solution(
  [
    [1, 2],
    [2, 3]
  ],
  [
    [3, 4],
    [5, 6]
  ]
);
solution([[1], [2]], [[3], [4]]);
