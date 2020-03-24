/**
 * 풀이:
 * 1. 2차원 배열 회전 함수 만들어서 최대 4번 회전
 * 2.
 */

function turn_right_key(key) {
  const key_size = key.length;
  console.log(key_size);
  let temp_key = Array();
  for (let i = 0; i <= key_size; i++) {
    temp_key = Array(i)
      .fill(i)
      .map(i => Array(i));
  }
  console.log(temp_key);
}

function solution(key, lock) {
  var answer = true;
  return answer;
}

// test
turn_right_key([
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1]
]);
solution(
  [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ]
); // result true
