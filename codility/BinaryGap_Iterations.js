// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let binaryN = N.toString(2);
  console.log(binaryN);

  let trimmed = binaryN.substr(0, binaryN.lastIndexOf("1") + 1);
  console.log(trimmed);

  let max = Math.max(...trimmed.split("1").map(e => e.length));
  console.log(max);
  return max;

  // let zeros = String(binaryN).split("1");
  // console.log(zeros);
  // let length = [];
  // for (let i = 0; i < zeros.length; i++) {
  //   length.push(zeros[i].length);
  // }
  // console.log(length);
  // if (length[0] === 0 && length.length === 2) {
  //   console.log(0);
  //   return 0;
  // } else {
  //   console.log(Math.max.apply(0, length));
  //   return Math.max.apply(0, length);
}

// test
// solution(1041);
// solution(15);
// solution(32);
solution(6);
solution(328);
