function solution(n) {
  let n_arr = [...(n + "")];
  n_arr = n_arr.reverse();
  for (let i in n_arr) {
    n_arr[i] = Number(n_arr[i]);
  }
  return n_arr;
}

// test
solution(12345);
