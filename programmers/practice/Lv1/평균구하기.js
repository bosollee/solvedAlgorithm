function solution(arr) {
  let sum = 0;
  for (let a of arr) sum += a;
  let avg = sum / arr.length;
  console.log(avg);
  return avg;
}

// test
solution([1, 2, 3, 4]);
solution([5, 5]);
