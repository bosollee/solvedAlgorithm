function solution(d, budget) {
  let result = 0;
  let count = 0;
  d.sort((a, b) => a - b);
  console.log(d);
  for (let i = 0; i < d.length; i++) {
    count++;
    result += d[i];
    console.log(result);
    if (result > budget) {
      count--;
      break;
    }
  }
  return count;
}

// test
solution([1, 2, 3, 4, 5], 9);
solution([2, 2, 3, 3], 10);
