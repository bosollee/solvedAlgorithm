function solution(heights) {
  return heights.map((a, i) => {
    while (i) {
      i--;
      if (heights[i] > a) {
        return i + 1;
      }
    }
    return 0;
  });
}

// test
solution([6, 9, 5, 7, 4]); // return [0,0,2,2,4]
solution([3, 9, 9, 3, 5, 7, 2]); // return [0,0,0,3,3,3,6]
solution([1, 5, 3, 6, 7, 6, 5]); // return [0,0,2,0,0,5,6]
